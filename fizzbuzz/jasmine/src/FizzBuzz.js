class FizzBuzz {
  _isDivisibleBy(number, devisor) {
    return number % devisor === 0;
  }

  _isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  _isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  _isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  says(number) {
    if (this._isDivisibleByThree(number) && this._isDivisibleByFive(number)) {
      return "FizzBuzz";
    } else if (this._isDivisibleByFive(number)) {
      return "Buzz";
    } else if (this._isDivisibleByThree(number)) {
      return "Fizz";
    } else {
      return number;
    }
  }
}
