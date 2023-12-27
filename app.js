// Assignment 1
let fruits = [];

fruits.push("apple","banana","orange");

fruits.splice(0,1);

fruits.push("grapes");

fruits.splice(1,1,"pear");

console.log(fruits)

// Assignment 2
let person = {};

person.name = "John";
person.age = 30;
person.city = "New York";

delete person.age;

person.job = "Engineer";

person.city = "San Fransisco"
console.log(person);

// Assignment 3:
let cars = [];

cars = [
    {make:"Toyota",model:"Camry",year:2018},
    {make:"Tesla",model:"Model 3",year:2018},
    {make:"Ford",model:"Mustang GT",year:2021}
]

cars.splice(0,1);

cars.push({make:"Cheverlot",model:"Silverado",year:2022})

cars[1].model = "Accord";

console.log(cars);