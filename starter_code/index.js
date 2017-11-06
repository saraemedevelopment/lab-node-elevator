const Elevator = require('./elevator.js');
const Person = require('./person.js');

let lift = new Elevator();
let passenger1= new Person("Sara", 2, 3);

lift.call(passenger1);

lift.log();

console.log(lift.requests);
