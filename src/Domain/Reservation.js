import ERROR from '../constants/Error.js';
import REGEXP from '../constants/RegExp.js';
import CustomError from '../utils/CustomError.js';

class Reservation {
  #date;

  #order;

  constructor() {
    this.#date = null;
    this.#order = null;
  }

  getDate() {
    return this.#date;
  }

  setDate(date) {
    this.#validateDate(date);

    this.#date = date;
  }

  getOrder() {
    return this.#order;
  }

  setOrder(order) {
    this.#validateOrder(order);

    this.#order = this.#formatOrder(order);
  }

  #formatOrder(order) {
    return order;
  }

  #validateDate(date) {
    if (!Number.isInteger(date) || !(date >= 1 && date <= 31)) {
      throw new CustomError(ERROR.invalidInputDate);
    }
  }

  #validateOrder(order) {
    console.log(order);
    this.#validateFormat(order);
  }

  #validateFormat(order) {
    order.forEach(item => {
      if (!item.match(REGEXP.inputOrderFormat)) {
        throw new CustomError(ERROR.invalidInputOrder);
      }
    });
  }
}

export default Reservation;
