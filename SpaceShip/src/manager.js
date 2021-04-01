import { Asteroid } from "./actors/Asteroid";
import { Snack } from "./actors/Snack";
import { Spaceship } from "./actors/Spaceship";

class Manager {
  constructor() {
    this.state = true;
    this.intervalID = null;
    this.asteroids = [];
    this.snacks = [];
    this.num = 20;
    this.spaceShipStatus = 10;
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
        const samples = new Snack();
        this.snacks.push(samples);
      }, 5000);
      this.state = false;
    }
  }

  removeSnack(index) {
    this.snacks.splice(index, 1);
  }

  removeAsteroid(index) {
    this.asteroids.splice(index, 1);
  }

  lifeBar() {
    return `${this.spaceShipStatus}/100`
  }
  stop() { }

  getDistance(object, spaceship, isSnack) {
    const xDiff = spaceship.pos.x - object.pos.x;
    const yDiff = spaceship.pos.y - object.pos.y;
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    if (distance <= 30) {
      if (isSnack && this.spaceShipStatus < 100) {
        this.spaceShipStatus += 1
      } else if (!isSnack) {
        this.spaceShipStatus -= 1;
      }
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
    ctx.fillText(`Life: ${this.lifeBar()}`, this.pos.x, this.pos.y + 17);
  }

  keyboardEventDown(key) { }
  keyboardEventUp(key) { }
}

const myManager = new Manager();

export { myManager };
