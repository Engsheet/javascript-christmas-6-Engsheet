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
      .map(order => MENU[order[0]].price * order[1])
      .reduce((total, price) => total + price, 0);

    return totalPrice;
  }

  getCategoryOrderCount(category) {
    const categories = Object.values(CONSTANTS.categories);

    if (!categories.includes(category)) return null;

    const categoryOrderCount = Object.entries(this.#order)
      .filter(order => MENU[order[0]].category === category)
      .reduce((total, order) => total + Number(order[1]), 0);

    return categoryOrderCount;
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
    this.#validateZeroCount(order);
    this.#validateExceedMaxCount(order);
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
      .filter(item => item.category === CONSTANTS.categories.beverage)
      .map(item => item.name);

    if (orderList.every(item => beverage.includes(item))) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateZeroCount(value) {
    const count = value.map(item => Number(item.split('-')[1]));

    if (count.some(item => item === 0)) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateExceedMaxCount(value) {
    const totalCount = value
      .map(item => Number(item.split('-')[1]))
      .reduce((total, count) => total + count, 0);

    if (totalCount > CONSTANTS.maxOrderCount) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }
}

export default Reservation;
