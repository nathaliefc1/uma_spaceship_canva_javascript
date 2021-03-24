const asteroidImg = require("../assets/asteroid2.png");
//https://www.pngfind.com/download/xTimJh_asteroid-pixel-art-red-button-hd-png-download/

class Asteroid {
  constructor(pos = { x: 100, y: 100 }, size = { w: 15, y: 15 }) {
    this.asteroidColor = "yellow";
    this.pos = pos;
    this.x_speed = 5;
    this.direction_x = 1;
    this.asteroidSize = size;
    this.image = new Image();
    this.image.src = asteroidImg;
  }

  update(frame) {
    if (this.pos.x <= 650 && this.pos.x >= -50) {
      this.pos.x += this.x_speed * this.direction_x;
    } else {
      this.pos.x = this.direction_x > 0 ? -50 : 650;
      this.pos.y = function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      };
    }
  }

  draw(ctx, delta) {
    ctx.translate(this.pos.x, this.pos.y);
    ctx.fillStyle = this.asteroidColor;
    ctx.drawImage(this.image, this.pos.x - 15, this.pos.y - 5, 50, 25);
    ctx.fillRect(this.pos.x, this.pos.y, 15, 15);
  }
}

export default Asteroid;
