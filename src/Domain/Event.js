import CONSTANTS from '../constants/Constants.js';

class Event {
  #benefits;

  constructor() {
    this.#benefits = {
      dDayDiscount: CONSTANTS.event.defaultValue,
      weekdayDiscount: CONSTANTS.event.defaultValue,
      weekendDiscount: CONSTANTS.event.defaultValue,
      specialDiscount: CONSTANTS.event.defaultValue,
      giveawayBenefit: false,
    };
  }

  getBenefits() {
    return this.#benefits;
  }

  #isEventParticipant(reservation) {
    return reservation.getTotalPrice() >= CONSTANTS.event.minParticipatePrice;
  }

  #applyGiveawayEvent(reservation) {
    const condition =
      reservation.getTotalPrice() >= CONSTANTS.event.giveawayEventPrice;

    if (condition) {
      this.#benefits = { ...this.#benefits, giveawayBenefit: true };
    }
  }

  applyEvent(reservation) {
    this.#applyGiveawayEvent(reservation);

    console.log(this.#isEventParticipant(reservation));
  }
}

export default Event;
