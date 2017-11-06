class Elevator {
  constructor() {
    this.floor = 10;
    this.MAXFLOOR = 10;
    this.direction = "up";
    this.requests = [];
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
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  };

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    }
  }
  call(person) {
    this.requests.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} Floor: ${this.floor} `);
  }
}

module.exports = Elevator;
