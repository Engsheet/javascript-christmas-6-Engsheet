import ERROR from '../constants/Error.js';
import CustomError from './CustomError.js';

class Validation {
  static isEmptyValue(input) {
    if (!input) {
      throw new CustomError(ERROR.emptyInput);
    }
  }
}

export default Validation;
