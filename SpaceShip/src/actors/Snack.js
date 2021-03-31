import { randomX, randomY } from "../../utils/getRandom";
const snackImg = require("../../assets/snack.png");

class Snack {
    constructor(pos = { x: 0, y: 0 }, size = { w: 25, h: 25 }) {
        this.color = green;
        this.pos = pos;
        this.snackSize = size;
        this.xSpeed = 2;
        this.canvasWidth = 800;
        this.canvasHeigth = 600;
        this.image = new Image();
        this.image.src = snackImg;
        this.snack = [];
    }

    update(frame) {
        this.pos.x = randomX() * this.canvasWidth;
        this.pos.y = randomY() * this.canvasHeigth;

    }

    draw(ctx, delta) {
        ctx.fillStyle = this.Color;
        ctx.fillRect(this.pos.x, this.pos.y, this.snackSize.w - 10, this.snackSize.h - 10);
        ctx.drawImage(this.image, this.pos.x - 5, this.pos.y - 5, this.snackSize.w, this.snackSize.h);
    }
    keyboardEventDown(key) { }
    keyboardEventUp(key) { }
}

export { Snack }