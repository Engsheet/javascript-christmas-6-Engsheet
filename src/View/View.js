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

  printIterator(message, value) {
    const output = Array.isArray(value)
      ? [message, ...value]
      : [message, value];

    output.forEach(item => this.#outputView.printMessage(item));
  }

  printReceipt(reservation, event) {
    this.#printEventPreview(reservation);
    this.#printOrderHistory(reservation);
    this.#printTotalPrice(reservation);
    this.#printGiveaway(event);
    this.#printBenefitDetails(event);
    this.#printTotalBenefitPrice(event);
    this.#printApplyDiscountPayment(reservation, event);
    this.#printEventBadge(event);
  }

  #printEventPreview(reservation) {
    const message = MESSAGES.output.eventPreview.join(
      `${reservation.getDate()}`,
    );

    this.print(message);
  }

  #printOrderHistory(reservation) {
    this.printIterator(
      MESSAGES.output.orderHistoryTitle,
      reservation.getOrderHistory(),
    );
  }

  #printTotalPrice(reservation) {
    this.printIterator(
      MESSAGES.output.totalPriceTitle,
      `${reservation.getTotalPrice().toLocaleString()}원`,
    );
  }

  #printGiveaway(event) {
    this.printIterator(
      MESSAGES.output.giveawayTitle,
      event.getGiveawayEvent()
        ? MESSAGES.output.giveawayMessage
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printBenefitDetails(event) {
    const benefitDetails = Object.entries(event.getBenefitDetails()).map(
      item => `${CONSTANTS.eventName[item[0]]}: -${item[1].toLocaleString()}원`,
    );

    this.printIterator(
      MESSAGES.output.benefitDetailsTitle,
      benefitDetails.length
        ? benefitDetails
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printTotalBenefitPrice(event) {
    this.printIterator(
      MESSAGES.output.benefitPriceTitle,
      event.getTotalBenefitsPrice()
        ? `-${event.getTotalBenefitsPrice().toLocaleString()}원`
        : MESSAGES.output.noBenefitsMessage,
    );
  }

  #printApplyDiscountPayment(reservation, event) {
    const applyDiscountPayment =
      reservation.getTotalPrice() - event.getTotalDiscountPrice();

    this.printIterator(
      MESSAGES.output.applyDiscountPaymentTitle,
      `${applyDiscountPayment.toLocaleString()}원`,
    );
  }

  #printEventBadge(event) {
    this.printIterator(
      MESSAGES.output.eventBadgeTitle,
      event.getEventBadge() || MESSAGES.output.noBenefitsMessage,
    );
  }
}

export default View;
