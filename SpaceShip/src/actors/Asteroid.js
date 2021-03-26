import { randomX, randomY } from "../../utils/getRandom";
const asteroidImg = require("../../assets/asteroid.png");
//https://www.pngfind.com/download/xTimJh_asteroid-pixel-art-red-button-hd-png-download/

class Asteroid {
  constructor(pos = { x: 0, y: 0 }, size = { w: 15, y: 15 }) {
    this.asteroidColor = "yellow";
    this.pos = pos;
    this.xSpeed = 2;
    this.directionX = 1;
    this.asteroidSize = size;
    this.image = new Image();
    this.image.src = asteroidImg;
    this.asteroids = [];
    this.asteroidLimit = 20;
    
  }

  update(frame) {
    if (this.pos.x <= 800 && this.pos.x >= -20) {
      this.pos.x += this.xSpeed * this.directionX;
    } else {
      this.pos.x = randomX();
      this.pos.y = randomY();
    }
  }

  draw(ctx, delta) {
    ctx.fillStyle = this.asteroidColor;
    ctx.fillRect(this.pos.x, this.pos.y, 15, 15); // Pinta cuadrado actor
    ctx.drawImage(this.image, this.pos.x - 5, this.pos.y - 5, 25, 25); // Pinta imagen actor
  }

  keyboardEventDown(key) {}
  keyboardEventUp(key) {}

}

export { Asteroid };
