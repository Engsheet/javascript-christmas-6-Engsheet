import { Console } from '@woowacourse/mission-utils';
import Validation from '../utils/Validation.js';

const InputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);

    Validation.isEmptyValue(userInput);

    return userInput;
  },
};

export default InputView;
