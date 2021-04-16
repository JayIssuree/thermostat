describe('FizzBuzz', function() {

    beforeEach(function(){
        subject = new FizzBuzz();
    })

    describe('knows when a number is', function(){

        it('divisible by 3', function(){
            expect(subject._isDivisibleByThree(3)).toBe(true);
        });

    });

    describe('knows when a number is not', function(){

        it('dibisible by 3', function(){
            expect(subject._isDivisibleByThree(1)).toBe(false);
        });

    });

});