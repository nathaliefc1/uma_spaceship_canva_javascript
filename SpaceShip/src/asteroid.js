const asteroidImg = require("../assets/asteroid2.png");
//https://www.pngfind.com/download/xTimJh_asteroid-pixel-art-red-button-hd-png-download/

class asteroid {
  constructor(pos = { x: 100, y: 100 }, size = { w: 15, y: 15 }) {
    this.asteroidColor = "yellow";
    this.pos = pos;
    this.x_speed = 5;
    this.direction_x = 1;
    this.asteroidSize = size;
  }

  update(frame) {
    this.angle = Math.abs(((frame * 5) % 60) - 30);
    if (this.pos.x <= 650 && this.pos.x >= -50) {
      this.pos.x += th;
      is.x_speed * this.direction_x;
    } else {
      this.pos.x = this.direction_x > 0 ? -50 : 650;
    }
  }

  draw(ctx) {
    ctx.translate(this.pos.x, this.pos.y);
    ctx.fillStyle = this.asteroidColor;
    ctx.fillRect(100, 100, 15, 15);
  }
}

export default asteroid;
