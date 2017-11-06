const Elevator = require('./elevator.js');
const Person = require('./person.js');

let lift = new Elevator();
let person1= new Person("Sara", 2, 3);
let person2= new Person ("Celia", 4, 0);

lift.log();
lift.call(person1);
lift.call(person2);
console.log(lift.requests);
console.log(lift.requestedFloors);
lift.floorUp();
lift.floorUp();
lift.log();

console.log(lift.passengers);
console.log(lift.requestedFloors);
