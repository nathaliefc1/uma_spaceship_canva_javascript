/*const actors = [];

let asteroids = [];
let num = 5;
*/

/*setInterval(() =>{
    let enemy = new.ActorAsteroid = true;
    this.asteoid = 

})*/

// Distancia entre 2 actores - Teorema de pitagoras
/*function getDistance(xA, yA, xB, yB) { 
	var xDiff = xA - xB; 
	var yDiff = yA - yB;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
*/
import { Asteroid } from "./actors/Asteroid";
import { Spaceship } from "./actors/Spaceship";

class Manager {
  constructor() {
    this.state = true;
    this.intervalID = null;
    this.asteroids = [];
    this.spaceShipStatus = 100;
  }

  // Creo set interval para crear nuevos asteroides cada 5 segundos
  start() {
    if (this.state) {
      this.intervalID = setInterval(() => {
        const enemy = new Asteroid();
        this.asteroids.push(enemy);
        console.log(this.asteroids);
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
}

const myManager = new Manager();

export { myManager };
