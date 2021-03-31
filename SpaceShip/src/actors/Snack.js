import { randomX, randomY } from "../../utils/getRandom";
const snackImg = require("../../assets/snack.png");

class Snack {
    constructor(pos = { x: 770, y: 500 }, size = { w: 25, h: 25 }) {
        this.color = "green";
        this.pos = pos;
        this.snackSize = size;
        this.ySpeed = 2;
        this.directionY = -1;
        this.canvasWidth = 800;
        this.canvasHeigth = 600;
        this.image = new Image();
        this.image.src = snackImg;
        this.snack = [];
    }

    update(frame) {
        let direction = this.pos.y += this.ySpeed * this.directionY;
    }


    draw(ctx, delta) {
        ctx.fillStyle = this.Color;
        ctx.fillRect(this.pos.x, this.pos.y, this.snackSize.w, this.snackSize.h);
        ctx.drawImage(this.image, this.pos.x - 5, this.pos.y - 5, this.snackSize.w, this.snackSize.h);
    }
    keyboardEventDown(key) { }
    keyboardEventUp(key) { }
}

export { Snack }