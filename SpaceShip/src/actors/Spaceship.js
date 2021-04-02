import angle2rad from "../../utils/angle2rad";
import checkLimits from "../../utils/checkLimits";
import { myManager } from "../manager";

const spaceshipImg = require("../../assets/UmaSpaceShip.png");
const spaceshipBrokeImg = require("../../assets/explosion.png");
const takeSound = require("../../assets/take.flac");

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
    this.accelarating = false;
    this.take = new Audio(takeSound);
  }

  update(frame) {
    this.angle += this.angleSpeed;
    this.angleSpeed *= 0.9;
    this.spaceshipSpeed =
      this.spaceshipSpeed * 0.9 + this.spaceshipAcceleration;

    const newPos = {
      x: this.pos.x + Math.cos(angle2rad(this.angle)) * this.spaceshipSpeed,
      y: this.pos.y + Math.sin(angle2rad(this.angle)) * this.spaceshipSpeed,
    };

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
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(angle2rad(this.angle));
    ctx.fillStyle = this.spaceshipColor;
    ctx.fillRect(
      -this.spaceshipSize.h / 6,
      -this.spaceshipSize.w / 6,
      this.spaceshipSize.h / 3,
      this.spaceshipSize.w / 3,
    );
    if (this.accelarating) {
      ctx.drawImage(this.image, 770.4, 1000, 700, 800, - this.spaceshipSize.w / 2, - this.spaceshipSize.h / 2, this.spaceshipSize.w * 1.1, this.spaceshipSize.h * 1.1);
    } else {
      ctx.drawImage(this.image, 3135, 1000, 610, 800, - this.spaceshipSize.w / 2, - this.spaceshipSize.h / 2, this.spaceshipSize.w * 1.1, this.spaceshipSize.h * 1.1); // Pinta la imagen de Uma
    }
  }

  eatSnack() {
    this.take.play();
  }

  keyboardEventDown(key) {
    if (key === "ArrowLeft") {
      this.angleSpeed = -4;
    } else if (key === "ArrowRight") {
      this.angleSpeed = 4;
    } else if (key === "ArrowDown") {
      this.spaceshipAcceleration = 1;
    } else if (key === "ArrowUp") {
      this.spaceshipAcceleration = -1;
      this.accelarating = true;
    }
  }
  keyboardEventUp(key) {
    if (key === "ArrowDown") {
      this.spaceshipAcceleration = 0;
    } else if (key === "ArrowUp") {
      this.spaceshipAcceleration = 0;
      this.accelarating = false;
    }
  }
}

export { Spaceship };
