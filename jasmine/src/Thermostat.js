'use strict'

class Thermostat {

    constructor(){
        this.MINIMUM_TEMPERATURE = 10
        this.powerSavingMode = true
        this.temperature = 20
    }

    getCurrentTemperature(){
        return this.temperature
    }

    getPSM(){
        return this.powerSavingMode
    }

    turnOffPSM(){
        this.powerSavingMode = false
    }

    turnOnPSM(){
        this.powerSavingMode = true
    }

    up(){
        this.temperature += 1
    }

    down(){
        if (this.isMinimumTemperature()){
            return;
        }
        this.temperature -= 1
    }

    isMinimumTemperature(){
        return this.temperature <= this.MINIMUM_TEMPERATURE
    }

}