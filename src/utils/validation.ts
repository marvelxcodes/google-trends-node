const MILLISECONDS_IN_DAYS = 24 * 60 * 60 * 1000;

class Validation {
  static isLessThan7Days(date1: number, date2: number) {
    return Math.abs(date2 - date1) / MILLISECONDS_IN_DAYS < 7;
  }
}

export const { isLessThan7Days } = Validation;

export default Validation;
