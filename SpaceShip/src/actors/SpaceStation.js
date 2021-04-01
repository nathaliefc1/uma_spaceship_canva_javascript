const sStationImg = require("../../assets/space-station.png");

class SpaceStation {
    constructor(pos = { x: 720, y: 10 }, size = { w: 90, h: 90 }) {
        this.color = "transparent";
        this.pos = pos;
        this.snackSize = size;
        this.canvasWidth = 800;
        this.canvasHeigth = 600;
        this.image = new Image();
        this.image.src = sStationImg;
    }

    draw(ctx, delta) {
        ctx.fillStyle = this.Color;
        //ctx.fillRect(this.pos.x, this.pos.y, this.snackSize.w, this.snackSize.h);
        ctx.drawImage(this.image, this.pos.x - 10, this.pos.y - 10, this.snackSize.w, this.snackSize.h);
    }
    keyboardEventDown(key) { }
    keyboardEventUp(key) { }
}

export { SpaceStation }