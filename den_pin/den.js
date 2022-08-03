class FlashLamp {
    constructor(status, my_battery) {
        this.status = status;
        this.my_battery = my_battery;
    }    
    setBattery(my_battery) {
        this.battery = my_battery
    }
    getBatteryInfo() {
        return this.battery.getEnergy() 
    };
    turnOn() {
        this.status = true
    }
    turnOff() {
        this.status = false;
    }
    light() {
        if (this.battery.getEnergy() == 0) {
            alert("den cung khong sang");
        }
        if(this.status) {
            alert("den sang");
        } else {
            alert("den khong sang")
        }
    }
    
}





