class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = "up";
    this.requests = [];
    this.requestedFloors = [];
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    let interval1 = setInterval(() => {
      this.update();
    }, 1000);
  }
  stop() {
    clearInterval(interval1);
  }
  update() {
    this.log();
  }
  _passengersEnter() {

    this.waitingList.forEach(elem => {
        if (elem.originFloor === this.floor )
          this.passengers.push(elem.name);
          // this.waitingList.delete(person);
          this.requestedFloors.push(elem.destinationFloor);
          console.log(`${elem.name} has enter the elevator`);

          });
    }

  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this._passengersEnter();
    }
  };

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
      this._passengersEnter(person);

    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requestedFloors.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} Floor: ${this.floor} `);
  }
}

module.exports = Elevator;
