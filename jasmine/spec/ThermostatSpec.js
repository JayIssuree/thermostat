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

    })

})