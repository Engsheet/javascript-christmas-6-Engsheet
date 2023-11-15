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

  printBenefits(event, totalPrice) {
    this.#printGiveaway(event.getGiveawayEvent());
    this.#printBenefitDetails(event.getBenefitDetails());
    this.#printTotalBenefitPrice(event.getTotalBenefitsPrice());
    this.#printApplyDiscountPayment(totalPrice, event.getTotalDiscountPrice());
  }

  #printGiveaway(value) {
    this.printReceipt(
      MESSAGES.output.giveawayTitle,
      value
        ? MESSAGES.output.giveawayMessage
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printBenefitDetails(value) {
    const benefitDetails = Object.entries(value).map(
      item => `${CONSTANTS.eventName[item[0]]}: -${item[1].toLocaleString()}원`,
    );

    this.printReceipt(
      MESSAGES.output.benefitDetailsTitle,
      benefitDetails.length
        ? benefitDetails
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printTotalBenefitPrice(value) {
    this.printReceipt(
      MESSAGES.output.benefitPriceTitle,
      value
        ? `-${value.toLocaleString()}원`
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printApplyDiscountPayment(totalPrice, discountPrice) {
    const applyDiscountPayment = totalPrice - discountPrice;

    this.printReceipt(
      MESSAGES.output.applyDiscountPaymentTitle,
      `${applyDiscountPayment.toLocaleString()}원`,
    );
  }
}

export default View;
