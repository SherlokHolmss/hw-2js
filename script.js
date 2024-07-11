let temperatureFahrenheit = 1;
let temperatureCelsius = (temperatureFahrenheit - 32) * (5/9);
console.log(temperatureCelsius);

let temperatureCelsius2 = 25;
let temperatureFahrenheit2 = (temperatureCelsius2 * 9/5) + 32;
console.log(temperatureFahrenheit2);

let daysInMonths = 30;
console.log(daysInMonths * 24);
console.log((daysInMonths * 24) * 60);

let healthPoints = 100;
let energyPoints = 100;
healthPoints -= 10;
energyPoints -= 20;
console.log(healthPoints);
console.log(energyPoints);

let purchaseAmount = 200;
purchaseAmount -= (purchaseAmount / 100) * 10;
console.log(purchaseAmount);

let floatNumber = 1.2;
console.log(Math.floor(floatNumber));

let stringWithFloatNumber = "Домашнє завдання зайняло 7.5 хвилин";
console.log(parseFloat(stringWithFloatNumber));

let stringWithIntNumber = "у мене 541 строка коду";
console.log(parseInt(stringWithIntNumber));

let sqrtNumber = Math.sqrt(4);
console.log(sqrtNumber);

let intString = "123";
let integer = 456;
let parsedInteger = parseInt(intString);
let stringFromInteger = integer.toString();
console.log(parsedInteger);
console.log(stringFromInteger);
