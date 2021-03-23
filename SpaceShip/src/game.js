import Spaceship from "./Spaceship";

window.addEventListener("load", () => {
  // Get a reference to canvas dom tag
  const canvas = document.getElementById("root");

  // Get the 2D context
  const ctx = canvas.getContext("2d");

  //Get actors
  const actors = [new Spaceship({ x: 100, y: 200 })];

  //Game render loop
  const fps = 25;
  let frame = 0;
  setInterval(() => {
    //Clear the canvas
    ctx.clearRect(0, 0, 600, 400);

    //Update game actor objects
    actors.forEach((actor) => {
      ctx.save();
      actor.draw(ctx);
      ctx.restore();
    });

    //Update currect frame to make animations work
    frame += 1;
  }, 1000 / fps);

  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => actor.keyboardEventUp(e.key));
  });
});
