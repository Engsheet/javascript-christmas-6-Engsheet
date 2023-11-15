import { Console } from '@woowacourse/mission-utils';
import Event from './Domain/Event.js';
import Reservation from './Domain/Reservation.js';
import View from './View/View.js';
import MESSAGES from './constants/Messages.js';

class ReserveService {
  #view;

  #reservation;

  #event;

  constructor() {
    this.#view = new View();
    this.#reservation = new Reservation();
    this.#event = new Event();
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

  applyEvent() {
    this.#event.applyEvent(this.#reservation);
  }

  printReceipt() {
    this.#view.printEventPreview(this.#reservation.getDate());
    this.#view.printOrderHistory(this.#reservation.getOrderHistory());
    this.#view.printTotalPrice(this.#reservation.getTotalPrice());
    this.#view.printBenefits(this.#event, this.#reservation.getTotalPrice());
  }

  async useReserveService() {
    await this.setReservation();
    this.applyEvent();
    this.printReceipt();
  }
}

export default ReserveService;
