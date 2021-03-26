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
import {Asteroid} from "./actors/Asteroid"
import {Spaceship} from "./actors/Spaceship"


class Manager {
    constructor() {
        this.state = true; 
        this.intervalID = null;
        this.asteroids = [];
        
       
    }

    // Creo set interval para crear nuevos asteroides cada 5 segundos
    start() {
       if(this.state) {
           this.intervalID = setInterval(() => {
               const enemy = new Asteroid();
               this.asteroids.push(enemy);
                console.log(this.asteroids);
           });
           this.state = false
       } else {
           clearInterval(this.intervalID);
       }
       
    }

    stop() {
        if(this.state = false){
            console.log("KABOOM!!!");
        }
    }

    getDistance(asteroid, spaceship){
        var xDiff = spaceship.pos.x - asteroid.pos.x; 
        var yDiff = spaceship.pos.y - asteroid.pos.y;
        let distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        console.log(distance);
    if (distance <=30) {
        console.log("KABOOM")
    }
    return distance;
  }
}

export {Manager};