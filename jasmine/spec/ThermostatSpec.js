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
    })

})