import { Console } from '@woowacourse/mission-utils';
import View from './View/View.js';
import MESSAGES from './constants/Messages.js';

class ReserveService {
  #view;

  #reservation;

  constructor() {
    this.#view = new View();
  }

  async getReservationDate() {
    let date;

    do {
      date = await this.#view.readReservationDate();
    } while (!date);

    return date;
  }

  async getReservation() {
    Console.print(MESSAGES.output.intro);
  }
}

export default ReserveService;
