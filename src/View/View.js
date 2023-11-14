import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';
import Validation from '../utils/Validation.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readReservationDate() {
    try {
      const userInput = await this.#inputView.readLineAsync(
        MESSAGES.request.inputDate,
      );

      Validation.validateInputDate(userInput);

      return Number(userInput);
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }
}

export default View;
