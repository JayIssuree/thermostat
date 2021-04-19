"use strict";

describe("Thermostat", function(){

    var subject;

    beforeEach(function(){
        subject = new Thermostat();
    })

    describe("temperature", function(){

        it("starts at 20 degrees", function(){
            expect(subject.getCurrentTemperature()).toEqual(20)
        })

    })

    describe("up", function(){

        it("increases the temperature by 1", function(){
            subject.up();
            expect(subject.getCurrentTemperature()).toEqual(21)
        })

    })

    describe("down", function(){

        it("decreases the temperature by 1", function(){
            subject.down();
            expect(subject.getCurrentTemperature()).toEqual(19)
        })

        it("has a minimum temperature of 10 degrees", function(){
            do {
                subject.down()
            } while (subject.getCurrentTemperature() > 10 )
            subject.down()
            expect(subject.getCurrentTemperature()).toEqual(10)
        })

    })

    describe("PSM", function(){

        it("is on by default", function(){
            expect(subject.getPSM()).toBe(true)
        })

        it("can be turned off", function(){
            subject.turnOffPSM()
            expect(subject.getPSM()).toBe(false)
        })

        it("can be turned back on", function(){
            subject.turnOffPSM();
            subject.turnOnPSM();
            expect(subject.getPSM()).toBe(true)
        })

        it("has a max limit of 25 when PSM is on", function (){
            do {
                subject.up()
            } while (subject.getCurrentTemperature() < 25)
            subject.up()
            expect(subject.getCurrentTemperature()).toEqual(25)
        })

        it("has a max limit of 32 when PSM is off", function(){
            subject.turnOffPSM();
            do {
                subject.up()
            } while (subject.getCurrentTemperature() < 32)
            subject.up()
            expect(subject.getCurrentTemperature()).toEqual(32)
        })

        it("sets the temperature to 25 when turning PSM mode back on", function(){
            subject.turnOffPSM();
            do {
                subject.up()
            } while (subject.getCurrentTemperature() < 32)
            subject.turnOnPSM()
            expect(subject.getCurrentTemperature()).toEqual(25)
        })

    })

})