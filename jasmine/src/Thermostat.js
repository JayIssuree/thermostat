'use strict'

class Thermostat {

    constructor(){
        this.MINIMUM_TEMPERATURE = 10
        this.MAXIMUM_TEMPERATURE_PSM_ON = 25
        this.MAXIMUM_TEMPERATURE_PSM_OFF = 32
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
        if (this.isMaximumTemperature){
            this.temperature = this.MAXIMUM_TEMPERATURE_PSM_ON
        }
        this.powerSavingMode = true
    }

    up(){
        if (this.isMaximumTemperature()) {
            return;
        }
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

    isMaximumTemperature(){
        if (this.getPSM() == true){
            return this.temperature >= this.MAXIMUM_TEMPERATURE_PSM_ON
        } else {
            return this.temperature >= this.MAXIMUM_TEMPERATURE_PSM_OFF
        }
    }

}