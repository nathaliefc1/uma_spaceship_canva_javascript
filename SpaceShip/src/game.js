import Spaceship from "./Spaceship";
import asteroid from "./asteroid";

window.addEventListener("load", () => {
  // Get a reference to canvas dom tag
  const canvas = document.getElementById("root");

  // Get the 2D context
  const ctx = canvas.getContext("2d");

  //Get actors
  const actors = [
    new Spaceship({ x: 100, y: 200 }),
    new asteroid({ x: 100, y: 100 }),
  ];

  //Game render loop
  /*const fps = 25;
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
  }, 1000 / fps);*/

  // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((actor) => actor.update && actor.update(delta));
    ctx.clearRect(0, 0, 600, 400);
    actors.forEach((actor) => {
      ctx.save();
      actor.draw(delta, ctx);
      ctx.restore();
    });

    window.requestAnimationFrame(render);
  };

  //setInterval(render, frameTime);
  window.requestAnimationFrame(render);

  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => actor.keyboardEventUp(e.key));
  });
});
