import angle2rad from "../utils/angle2rad";
import checkLimits from "../utils/checkLimits";

const spaceshipImg = require("../assets/spaceshipimage.png");
// image source https://www.pikpng.com/pngvi/iJwTwhi_spaceship-starfish-pixel-art-clipart/
class Spaceship {
  constructor(pos = { x: 100, y: 100 }, size = { w: 10, h: 15 }) {
    //super(pos);
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
    this.angleSpeed *= 0.9; // en cada frame, reducimos su velocidad a un 90%
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

    ctx.rotate(angle2rad(180));
    ctx.drawImage(this.image, -25, -13.5, 50, 25);
    ctx.fillRect(
      -this.spaceshipSize.h / 2,
      -this.spaceshipSize.w / 2,
      this.spaceshipSize.h,
      this.spaceshipSize.w
    );
  }

  addEventListener("click", (event) => {
    const projectile = new projectile(
      canvas/
    )
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
}

export default Spaceship;
