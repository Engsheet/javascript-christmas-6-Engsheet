import CONSTANTS from '../constants/Constants.js';
import { totalArray as getTotal } from '../utils/arrayUtils.js';
import { getDay } from '../utils/getDay.js';

class Event {
  #benefits;

  constructor() {
    this.#benefits = {
      dDayDiscount: CONSTANTS.eventValue.default,
      weekdayDiscount: CONSTANTS.eventValue.default,
      weekendDiscount: CONSTANTS.eventValue.default,
      specialDiscount: CONSTANTS.eventValue.default,
      giveawayEvent: false,
      eventBadge: null,
    };
  }

  applyEvent(reservation) {
    if (this.#isEventParticipant(reservation)) {
      this.#applyGiveawayEvent(reservation);
      this.#applyDDayDiscount(reservation);
      this.#applyWeekDiscount(reservation);
      this.#applySpecialDayDiscount(reservation);
    }
  }

  getGiveawayEvent() {
    return this.#benefits.giveawayEvent;
  }

  getBenefitDetails() {
    const benefits = this.#changeGiveawayValue();
    const filterApplyBenefits = this.#filterBenefits(benefits);

    return filterApplyBenefits;
  }

  getTotalBenefitsPrice() {
    const filterApplyBenefits = Object.values(this.getBenefitDetails());

    return getTotal(filterApplyBenefits);
  }

  getTotalDiscountPrice() {
    const filterApplyBenefits = Object.values(
      this.#filterBenefits(this.#benefits),
    );

    return getTotal(filterApplyBenefits);
  }

  #applyGiveawayEvent(reservation) {
    const condition =
      reservation.getTotalPrice() >= CONSTANTS.eventValue.giveawayEventPrice;

    this.#benefits = { ...this.#benefits, giveawayEvent: condition };
  }

  #applyDDayDiscount(reservation) {
    const date = reservation.getDate();
    const discountPrice =
      CONSTANTS.eventValue.dDayDiscountPrice +
      CONSTANTS.eventValue.dDayDiscountAdditional * (date - 1);

    if (date <= 25) {
      this.#benefits = { ...this.#benefits, dDayDiscount: discountPrice };
    }
  }

  #applyWeekDiscount(reservation) {
    const isWeekday = this.#checkWeekday(reservation.getDate());

    const discountPrice =
      CONSTANTS.eventValue.weekDiscountPrice *
      reservation.getCategoryOrderCount(
        isWeekday
          ? CONSTANTS.categories.dessert
          : CONSTANTS.categories.mainMenu,
      );

    this.#benefits = isWeekday
      ? { ...this.#benefits, weekdayDiscount: discountPrice }
      : { ...this.#benefits, weekendDiscount: discountPrice };
  }

  #applySpecialDayDiscount(reservation) {
    const date = reservation.getDate();
    const discountPrice = CONSTANTS.eventValue.specialDay.includes(date)
      ? CONSTANTS.eventValue.specialDayDiscountPrice
      : CONSTANTS.eventValue.default;

    this.#benefits = { ...this.#benefits, specialDiscount: discountPrice };
  }

  #changeGiveawayValue() {
    return this.#benefits.giveawayEvent
      ? {
          ...this.#benefits,
          giveawayEvent: CONSTANTS.eventValue.giveawayBenefit,
        }
      : this.#benefits;
  }

  #filterBenefits(benefitObject) {
    const filterBenefits = {};

    Object.keys(benefitObject).forEach(key => {
      if (benefitObject[key] && typeof benefitObject[key] === 'number')
        filterBenefits[key] = benefitObject[key];
    });

    return filterBenefits;
  }

  #isEventParticipant(reservation) {
    return (
      reservation.getTotalPrice() >= CONSTANTS.eventValue.minParticipatePrice
    );
  }

  #checkWeekday(date) {
    const day = getDay(date);
    const isWeekday = CONSTANTS.weekday.includes(day);

    return isWeekday;
  }
}

export default Event;
