describe("FizzBuzz", function () {
  beforeEach(function () {
    subject = new FizzBuzz();
  });

  describe("knows when a number is", function () {
    it("divisible by 3", function () {
      expect(subject._isDivisibleByThree(6)).toBe(true);
    });

    it("divisible by 5", function () {
      expect(subject._isDivisibleByFive(10)).toBe(true);
    });

    it("divisible by 15", function () {
      expect(subject._isDivisibleByFifteen(30)).toBe(true);
    });
  });

  describe("knows when a number is not", function () {
    it("dibisible by 3", function () {
      expect(subject._isDivisibleByThree(4)).toBe(false);
    });

    it("dibisible by 5", function () {
      expect(subject._isDivisibleByFive(8)).toBe(false);
    });

    it("divisible by 15", function () {
      expect(subject._isDivisibleByFifteen(9)).toBe(false);
    });
  });

  describe("says", function () {
    it("Fizz when divisible by 3", function () {
      expect(subject.says(3)).toEqual("Fizz");
    });
    it("Buzz when divisible by 5", function () {
      expect(subject.says(5)).toEqual("Buzz");
    });
    it("Fizzbuzz when divisible by 3 & 5", function () {
      expect(subject.says(15)).toEqual("FizzBuzz");
    });
    it("returns the number when none are true", function () {
      expect(subject.says(4)).toEqual(4);
    });
  });
});
