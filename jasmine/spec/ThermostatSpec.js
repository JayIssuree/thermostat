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

    describe("reset", function(){

        it("resets the temperature to 20", function(){
            subject.turnOffPSM();
            do {
                subject.up()
            } while (subject.getCurrentTemperature() < 32)
            subject.resetTemperature()
            expect(subject.getCurrentTemperature()).toEqual(20)
        })

    })

    describe("usage", function(){

        it("returns medium when the temperature is below 26", function(){
            expect(subject.energyUsage()).toEqual('medium-usage')
        })

        it("returns low when the temperature is below 18", function(){
            subject.down()
            subject.down()
            subject.down()
            expect(subject.energyUsage()).toEqual('low-usage')
        })

        it("returns high-usage when above 25", function(){
            subject.turnOffPSM();
            subject.up()
            subject.up()
            subject.up()
            subject.up()
            subject.up()
            subject.up()
            expect(subject.energyUsage()).toEqual('high-usage')
        })

    })

})