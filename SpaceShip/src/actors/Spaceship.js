import angle2rad from "../../utils/angle2rad";
import checkLimits from "../../utils/checkLimits";
import { Asteroid } from "./Asteroid";
import { myManager } from "../manager";

const spaceshipImg = require("../../assets/UmaSpaceShip.png");
const spaceshipBrokeImg = require("../../assets/explosion.png");
// image source https://www.pikpng.com/pngvi/iJwTwhi_spaceship-starfish-pixel-art-clipart/

class Spaceship {
  constructor(pos = { x: 720, y: 300 }, size = { w: 60, h: 60 }) {
    this.pos = pos;
    this.spaceshipSize = size;
    this.spaceshipColor = "transparent";
    this.angle = 0;
    this.angleSpeed = 0;
    this.spaceshipSpeed = 0;
    this.spaceshipAcceleration = 0;
    this.image = new Image();
    this.image.src = spaceshipImg;
    this.frameX = 0;
    this.frameY = 0;
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
    if (myManager.spaceShipStatus <= 0) {
      this.image.src = spaceshipBrokeImg;
      ctx.drawImage(this.image, 0, 0, 512, 512, this.pos.x - 25, this.pos.y - 27, this.spaceshipSize.w, this.spaceshipSize.h);
      myManager.gameOver = true;
    }
    // draw spaceship
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(angle2rad(this.angle));
    ctx.fillStyle = this.spaceshipColor;
    // Pinta el actor rectángulo rojo
    ctx.fillRect(
      -this.spaceshipSize.h / 6,
      -this.spaceshipSize.w / 6,
      this.spaceshipSize.h / 3,
      this.spaceshipSize.w / 3,
    );
    ctx.drawImage(this.image, 3135, 1000, 610, 800, - this.spaceshipSize.w / 2, - this.spaceshipSize.h / 2, this.spaceshipSize.w * 1.1, this.spaceshipSize.h * 1.1); // Pinta la imagen de Uma
  }

  keyboardEventDown(key) {
    if (key === "ArrowUp") {
      this.angleSpeed = -4;
    } else if (key === "ArrowDown") {
      this.angleSpeed = 4;
    } else if (key === "ArrowRight") {
      this.spaceshipAcceleration = 1;
    } else if (key === "ArrowLeft") {
      this.spaceshipAcceleration = -1;
    }
  }
  keyboardEventUp(key) {
    if (key === "ArrowRight") {
      this.spaceshipAcceleration = 0;
    } else if (key === "ArrowLeft") {
      this.spaceshipAcceleration = 0;
    }
  }
}

export { Spaceship };
