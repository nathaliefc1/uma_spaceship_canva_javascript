import randomY from "../utils/getRandomY";
const asteroidImg = require("../assets/asteroid2.png");
//https://www.pngfind.com/download/xTimJh_asteroid-pixel-art-red-button-hd-png-download/

class Asteroid {
  constructor(pos = { x: 200, y: 200 }, size = { w: 15, y: 15 }) {
    this.asteroidColor = "yellow";
    this.pos = pos;
    this.xSpeed = 2;
    this.directionX = 1;
    this.asteroidSize = size;
    this.image = new Image();
    this.image.src = asteroidImg;
  }

  update(frame) {
    if (this.pos.x <= 610 && this.pos.x >= -10) {
      this.pos.x += this.xSpeed * this.directionX;
    } else {
      this.pos.x = this.directionX > 0 ? -10 : 610;
      this.pos.y = randomY();
      console.log(this.pos.y);
    }
  }

  draw(ctx, delta) {
    ctx.translate(this.pos.x, this.pos.y);
    ctx.fillStyle = this.asteroidColor;

    ctx.drawImage(this.image, this.pos.x - 15, this.pos.y - 5, 50, 25); // Pinta imagen actor
    ctx.fillRect(this.pos.x, this.pos.y, 15, 15); // Pinta cuadrado actor
  }
}

export default Asteroid;
