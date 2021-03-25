import angle2rad from "../../utils/angle2rad";
import checkLimits from "../../utils/checkLimits";
import { Asteroid } from "./Asteroid";

const spaceshipImg = require("../../assets/UmaSpaceShip.png");
// image source https://www.pikpng.com/pngvi/iJwTwhi_spaceship-starfish-pixel-art-clipart/

class Spaceship {
  constructor(pos = { x: 100, y: 100 }, size = { w: 15, h: 20 }) {
    this.pos = pos;
    this.spaceshipSize = size;
    this.spaceshipColor = "red";
    this.angle = 0;
    this.angleSpeed = 0;
    this.spaceshipSpeed = 0;
    this.spaceshipAcceleration = 0;
    this.image = new Image();
    this.image.src = spaceshipImg;
  }

  update(frame) {
    this.angle += this.angleSpeed;
    this.angleSpeed *= 0.9; // reduce la velocidad en un 90% en cada frame
    this.spaceshipSpeed =
      this.spaceshipSpeed * 0.9 + this.spaceshipAcceleration; // la velocidad se va reduciendo pero la aceleración es constante

    const newPos = {
      x: this.pos.x + Math.cos(angle2rad(this.angle)) * this.spaceshipSpeed, // el giro es con respecto a la velocidad del ejeX y el ejeY
      y: this.pos.y + Math.sin(angle2rad(this.angle)) * this.spaceshipSpeed, // el giro es con respecto a la velocidad del ejeX y el ejeY
    };

    //this.pos = newPos;
    if (checkLimits(newPos)) {
      this.pos = newPos;
    }
  }

  draw(ctx, delta) {
    // draw spaceship
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(angle2rad(this.angle));
    ctx.fillStyle = this.spaceshipColor;
    // Pinta el actor rectángulo rojo
    ctx.fillRect(
      -this.spaceshipSize.h / 2,
      -this.spaceshipSize.w / 2,
      this.spaceshipSize.h,
      this.spaceshipSize.w
    );
    ctx.drawImage(this.image, 60,220,600,800,-30, -40, 60, 70); // Pinta la imagen de Uma
  }

  keyboardEventDown(key) {
    if (key === "ArrowLeft") {
      this.angleSpeed = -4;
    } else if (key === "ArrowRight") {
      this.angleSpeed = 4;
    } else if (key === "ArrowUp") {
      this.spaceshipAcceleration = 1;
    } else if (key === "ArrowDown") {
      this.spaceshipAcceleration = -1;
    }
  }
  keyboardEventUp(key) {
    if (key === "ArrowUp") {
      this.spaceshipAcceleration = 0;
    } else if (key === "ArrowDown") {
      this.spaceshipAcceleration = 0;
    }
  }
  /*getDistance(){  
	var xDiff = Spaceship.pos.x - Asteroid.pos.x; 
	var yDiff = Spaceship.pos.y - Asteroid.pos.y;
  let distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  console.log(distance);
  }*/
}

export { Spaceship };
