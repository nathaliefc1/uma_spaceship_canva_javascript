import { Asteroid } from "./actors/Asteroid";
import { Spaceship } from "./actors/Spaceship";

class Manager {
  constructor() {
    this.state = true;
    this.intervalID = null;
    this.asteroids = [];
    this.num = 20;
    this.spaceShipStatus = 100; //DEBERIA SER 100
    this.chrono = 0;
    this.pos = { x: 10, y: 20 };
    this.score = 0;
    this.gameOver = false;
  }

  // Creo set interval para crear nuevos asteroides cada 5 segundos
  start() {
    if (this.state) {
      this.intervalID = setInterval(() => {
        const enemy = new Asteroid();
        this.asteroids.push(enemy);
        // console.log(this.asteroids);
      }, 5000);
      this.state = false;
    }
  }

  stop() {}

  getDistance(asteroid, spaceship) {
    const xDiff = spaceship.pos.x - asteroid.pos.x;
    const yDiff = spaceship.pos.y - asteroid.pos.y;
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    if (distance <= 30) {
      this.spaceShipStatus -= 1;
      console.log("KABOOM");
    }
    return distance;
  }

  getChrono() {
    return `${this.chrono.toFixed(2)} sec`;
  }

  update() {
    this.chrono += 1 / 100; //25
  }

  draw(ctx, delta) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Your time is: ${this.getChrono()}`, this.pos.x, this.pos.y);
  }

  keyboardEventDown(key) {}
  keyboardEventUp(key) {}
}

const myManager = new Manager();

export { myManager };
