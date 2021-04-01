import { randomX, randomY } from "../../utils/getRandom";
const snackImg = require("../../assets/snack.png");

class Snack {
    constructor(size = { w: 25, h: 25 }) {
        this.color = "green";
        this.snackSize = size;
        this.ySpeed = 1;
        this.directionY = -1;
        this.canvasWidth = 800;
        this.canvasHeight = 600;
        this.image = new Image();
        this.image.src = snackImg;
        this.snack = [];
        this.pos = {
            y: this.canvasHeight,
            x: Math.random() * (800 - 0)
        }
    }

    update(frame) {
        let direction = this.pos.y += this.ySpeed * this.directionY;
    }


    draw(ctx, delta) {
        ctx.fillStyle = this.Color;
        //ctx.fillRect(this.pos.x, this.pos.y, this.snackSize.w, this.snackSize.h);
        ctx.drawImage(this.image, this.pos.x - 5, this.pos.y - 5, this.snackSize.w, this.snackSize.h);
    }

    keyboardEventDown(key) { }
    keyboardEventUp(key) { }
}

export { Snack }