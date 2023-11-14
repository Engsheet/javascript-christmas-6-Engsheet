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
    await this.setReservationDate();
    await this.setReservationOrder();
  }

  async getReservation() {
    Console.print(MESSAGES.output.intro);
    await this.setReservation();
    Console.print(MESSAGES.output.eventPreview);
  }
}

export default ReserveService;
