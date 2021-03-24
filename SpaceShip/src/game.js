import Spaceship from "./Spaceship";
import Asteroid from "./Asteroid";

window.addEventListener("load", () => {
  // Get a reference to canvas dom tag
  const canvas = document.getElementById("root");

  // Get the 2D context
  const ctx = canvas.getContext("2d");

  //Get actors
  const actors = [
    new Spaceship({ x: 100, y: 200 }),
    new Asteroid({ x: 10, y: 180 }),
    new Asteroid({ x: -30, y: 100 }),
    new Asteroid({ x: -10, y: 30 }),
  ];

  // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((actor) => actor.update && actor.update(delta));
    //Clear the canvas
    ctx.clearRect(0, 0, 600, 400);
    //Update game and draw actor objects
    actors.forEach((actor) => {
      ctx.save(); // guarda el valor inicial para volver a restore y comenzar de nuevo
      actor.draw(ctx, delta);
      ctx.restore();
    });

    window.requestAnimationFrame(render);
  };

  //setInterval(render, frameTime);
  window.requestAnimationFrame(render);

  // Eventos del teclado
  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => actor.keyboardEventUp(e.key));
  });
});
