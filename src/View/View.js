import CONSTANTS from '../constants/Constants.js';
import MESSAGES from '../constants/Messages.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readDate() {
    const userInput = await this.#inputView.readLineAsync(
      MESSAGES.request.inputDate,
    );
    const date = Number(userInput);

    return date;
  }

  async readOrder() {
    const userInput = await this.#inputView.readLineAsync(
      MESSAGES.request.inputOrder,
    );
    const order = userInput.split(',');

    return order;
  }

  print(value) {
    this.#outputView.printMessage(value);
  }

  printReceipt(message, value) {
    const output = Array.isArray(value)
      ? [message, ...value]
      : [message, value];

    output.forEach(item => this.#outputView.printMessage(item));
  }

  printEventPreview(date) {
    const message = MESSAGES.output.eventPreview.join(`${date}`);

    this.#outputView.printMessage(message);
  }

  printOrderHistory(value) {
    this.printReceipt(MESSAGES.output.orderHistoryTitle, value);
  }

  printTotalPrice(value) {
    this.printReceipt(
      MESSAGES.output.totalPriceTitle,
      `${value.toLocaleString()}원`,
    );
  }

  printBenefits(benefitObject) {
    this.#printGiveaway(benefitObject.giveawayEvent);
    this.#printBenefitDetails(benefitObject);
    this.#printTotalBenefitPrice(benefitObject);
  }

  #printGiveaway(giveawayBenefit) {
    this.printReceipt(
      MESSAGES.output.giveawayTitle,
      giveawayBenefit
        ? MESSAGES.output.giveawayMessage
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #getTotalBenefitPrice(benefitObject) {
    const benefits = this.#formatGiveawayPrice(benefitObject);
    const totalBenefit = this.#filterDiscountList(benefits).reduce(
      (total, cur) => total + Number(cur[1]),
      0,
    );

    return totalBenefit;
  }

  #formatGiveawayPrice(benefitObject) {
    if (benefitObject.giveawayEvent) {
      return {
        ...benefitObject,
        giveawayEvent: CONSTANTS.eventValue.giveawayBenefit,
      };
    }

    return benefitObject;
  }

  #filterDiscountList(benefitObject) {
    const discountList = [...Object.entries(benefitObject)].filter(
      item => item[1] && typeof item[1] === 'number',
    );

    return discountList;
  }

  #printBenefitDetails(benefitObject) {
    const benefits = this.#formatGiveawayPrice(benefitObject);
    const benefitDetails = this.#filterDiscountList(benefits).map(
      item => `${CONSTANTS.eventName[item[0]]}: -${item[1].toLocaleString()}원`,
    );

    this.printReceipt(
      MESSAGES.output.benefitDetailsTitle,
      benefitDetails.length
        ? benefitDetails
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printTotalBenefitPrice(benefitObject) {
    const totalBenefit = this.#getTotalBenefitPrice(benefitObject);

    this.printReceipt(
      MESSAGES.output.benefitPriceTitle,
      totalBenefit
        ? `-${totalBenefit.toLocaleString()}원`
        : MESSAGES.output.noBenefitsMessage,
    );
  }
}

export default View;
