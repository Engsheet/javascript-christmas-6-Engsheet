import CONSTANTS from '../constants/Constants.js';
import ERROR from '../constants/Error.js';
import MENU from '../constants/Menu.js';
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

  #formatOrder(value) {
    const order = {};

    value.forEach(item => {
      const [menu, count] = item.split('-');
      order[menu] = count;
    });

    return order;
  }

  #validateDate(date) {
    if (!Number.isInteger(date) || !(date >= 1 && date <= 31)) {
      throw new CustomError(ERROR.invalidInputDate);
    }
  }

  #validateOrder(value) {
    this.#validateFormat(value);
    this.#validateDuplicate(value);
    this.#validateIsValidMenu(value);
    this.#validateOnlyBeverage(value);
  }

  #validateFormat(value) {
    value.forEach(item => {
      if (!item.match(REGEXP.inputOrderFormat)) {
        throw new CustomError(ERROR.invalidInputOrder);
      }
    });
  }

  #validateDuplicate(value) {
    const condition = value
      .map(item => item.split('-')[0])
      .some((item, index) => index !== item.lastIndexOf(item));

    if (!condition) {
      throw new CustomError(ERROR.duplicateOrder);
    }
  }

  #validateIsValidMenu(value) {
    const menu = Object.keys(MENU);

    const condition = value
      .map(item => item.split('-')[0])
      .some(item => menu.includes(item));

    if (!condition) {
      throw new CustomError(ERROR.invalidMenu);
    }
  }

  #validateOnlyBeverage(value) {
    const beverage = Object.values(MENU)
      .filter(item => item.category === CONSTANTS.beverage)
      .map(item => item.name);

    const condition = value
      .map(item => item.split('-')[0])
      .some(item => beverage.includes(item));

    if (!condition) {
      throw new CustomError(ERROR.onlyBeverage);
    }
  }
}

export default Reservation;
