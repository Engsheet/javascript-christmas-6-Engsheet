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

  getOrderHistory() {
    const orderHistory = Object.entries(this.#order).map(
      item => `${item[0]} ${item[1]}개`,
    );

    return orderHistory;
  }

  getTotalPrice() {
    const totalPrice = Object.entries(this.#order)
      .map(item => MENU[item[0]].price * item[1])
      .reduce((total, price) => total + price, 0);

    return `${totalPrice.toLocaleString()}원`;
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
      throw new CustomError(ERROR.invalidDate);
    }
  }

  #validateOrder(order) {
    this.#validateFormat(order);
    this.#validateDuplicate(order);
    this.#validateIsValidMenu(order);
    this.#validateOnlyBeverage(order);
    this.#validateZeroQuantity(order);
    this.#validateExceedMaxQuantity(order);
  }

  #validateFormat(value) {
    value.forEach(item => {
      if (!item.match(REGEXP.inputOrderFormat)) {
        throw new CustomError(ERROR.invalidOrder);
      }
    });
  }

  #validateDuplicate(value) {
    const orderList = value.map(item => item.split('-')[0]);

    if (
      orderList.some((item, index) => index !== orderList.lastIndexOf(item))
    ) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateIsValidMenu(value) {
    const orderList = value.map(item => item.split('-')[0]);
    const menu = Object.keys(MENU);

    if (orderList.some(item => !menu.includes(item))) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateOnlyBeverage(value) {
    const orderList = value.map(item => item.split('-')[0]);
    const beverage = Object.values(MENU)
      .filter(item => item.category === CONSTANTS.beverage)
      .map(item => item.name);

    if (orderList.every(item => beverage.includes(item))) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateZeroQuantity(value) {
    const quantity = value.map(item => Number(item.split('-')[1]));

    if (quantity.some(item => item === 0)) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateExceedMaxQuantity(value) {
    const totalQuantity = value
      .map(item => Number(item.split('-')[1]))
      .reduce((total, quantity) => total + quantity, 0);

    if (totalQuantity > CONSTANTS.maxOrderQuantity) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }
}

export default Reservation;
