/*
Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность.

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    Создайте экземпляры каждого прибора.
    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
 */

Appliance.prototype.getPower = function (amperage) {
    console.log(`${this.name}'s power consumption is ${amperage * this.volt}W`);
};

function Comp(name, platform) {
    this.name = name,
        this.platform = platform
}

function Lamp(name, type, brightness = 0) {
    this.name = name,
        this.type = type,
        this.brightness = brightness
}

Lamp.prototype = new Appliance();
Comp.prototype = new Appliance();

//Установка необходимой якрости для лампы
Lamp.prototype.setBrightness = function (param) {
    console.log(`${this.name}'s brightness setted from ${this.brightness}% to ${param}%`);
    this.brightness = param;
}

//Функция - переключатель питания компьютера
Comp.prototype.powerSwitch = function () {
    if (this.enabled == false) {
        this.enabled = true;
        console.log(`${this.name} powered ON!`)
    }
    else {
        this.enabled = true;
        console.log(`${this.name} powered OFF!`)
    }
}

const lamp = new Lamp('Lamp', 'LED', 35);
const computer = new Comp('Laptop', 'x86');

lamp.setBrightness(56); // Lamp's brightness setted from 35% to 56%
lamp.getPower(0.2);  // Lamp's power consumption is 44W
computer.getPower(2); // Laptop's power consumption is 440W
computer.powerSwitch(); // Laptop powered ON!
computer.powerSwitch(); // Laptop powered OFF!

console.log(computer);
console.log(lamp);
