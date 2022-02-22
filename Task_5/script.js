/*Перепишите консольное приложение из предыдущего юнита на классы.

Общие требования:
Имена классов, свойств и методов должны быть информативными.
Соблюдайте best practices.
Используйте синтаксис ES6.
*/

console.clear();

// Базовый класс
class Appliance {
    constructor(name){
        this.name = name;
        this.enabled = false;
        this.volt = '220';
    }

    getPower (amperage) {
        console.log(`${this.name}'s power consumption is ${amperage * this.volt}W`);
    }
}

//Дочерний класс
class Comp extends Appliance{
    constructor(name, platform){
        super();
        this.name = name;
        this.platform = platform;
    }

    powerSwitch () {
        if (this.enabled == false) {
            this.enabled = true;
            console.log(`${this.name} powered ON!`)
        } else {
            this.enabled = true;
            console.log(`${this.name} powered OFF!`)
        }
    }
}

//Дочерний класс
class Lamp extends Appliance{
    constructor(name, type, brightness) {
        super();
        this.name = name;
        this.type = type;
        this.brightness = brightness || 0;
    }

    setBrightness (param) {
        console.log(`${this.name}'s brightness set from ${this.brightness}% to ${param}%`);
        this.brightness = param;
    }
}

const lamp = new Lamp('Lamp', 'LED', 35);
const computer = new Comp('Laptop', 'x86');

lamp.setBrightness(99); // Lamp's brightness setted from 35% to 56%
lamp.getPower(0.2);  // Lamp's power consumption is 44W
computer.getPower(2); // Laptop's power consumption is 440W
computer.powerSwitch(); // Laptop powered ON!
computer.powerSwitch(); // Laptop powered OFF!

console.log(computer);
console.log(lamp);

