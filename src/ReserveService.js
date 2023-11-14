import { Console } from '@woowacourse/mission-utils';
import View from './View/View.js';
import MESSAGES from './constants/Messages.js';
import Reservation from './Domain/Reservation.js';

class ReserveService {
  #view;

  #reservation;

  constructor() {
    this.#view = new View();
    this.#reservation = new Reservation();
  }

  async setReservationDate() {
    while (!this.#reservation.getDate()) {
      try {
        this.#reservation.setDate(await this.#view.readDate());
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async setReservationOrder() {
    while (!this.#reservation.getOrder()) {
      try {
        this.#reservation.setOrder(await this.#view.readOrder());
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async setReservation() {
    this.#view.print(MESSAGES.output.intro);

    await this.setReservationDate();
    await this.setReservationOrder();
  }

  applyEvent() {}

  printReceipt() {
    this.#view.printEventPreview(this.#reservation.getDate());
    this.#view.printOrderHistory(this.#reservation.getOrderHistory());
    this.#view.printTotalPrice(this.#reservation.getTotalPrice());
  }

  async useReserveService() {
    await this.setReservation();
    this.applyEvent();
    this.printReceipt();
  }
}

export default ReserveService;
