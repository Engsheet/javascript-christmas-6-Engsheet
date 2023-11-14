import ERROR from '../constants/Error.js';
import CustomError from './CustomError.js';

class Validation {
  static isEmptyValue(input) {
    if (!input) {
      throw new CustomError(ERROR.emptyInput);
    }
  }

  static validateInputDate(input) {
    const date = Number(input);

    if (!Number.isInteger(date) || !(date >= 1 && date <= 31)) {
      throw new CustomError(ERROR.invalidInputDate);
    }
  }
}

export default Validation;
