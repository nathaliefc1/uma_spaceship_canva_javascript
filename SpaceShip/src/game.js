import { Spaceship } from "./actors/Spaceship";
import { Asteroid} from "./actors/Asteroid";

window.addEventListener("load", () => {
  // Get a reference to canvas dom tag
  const canvas = document.getElementById("root");

  // Get the 2D context
  const ctx = canvas.getContext("2d");
  // Fondo del canvas - NO FUNCIONA
  /*ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);*/

  //Get actors
  const actors = [
    new Spaceship(),
    new Asteroid(),
  ];
  const enemy = [new asteroids()];

  // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
  let lastFrame = 0;

  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((actor) => actor.update && actor.update(delta));
    


    ctx.clearRect(0, 0, 600, 400); // Limpia el canvas

    // Actualiza juego y pinta actores
    actors.forEach((actor) => {
      ctx.save(); // guarda el valor inicial para volver a restore y comenzar de nuevo
      actor.draw(ctx, delta);
      ctx.restore(); // restoring a saves state
    });

    enemy.forEach((enemy)=>{
      ctx.save();
      enemy.draw(ctx.delta);
      ctx.restore();
    });

    window.requestAnimationFrame(render);
  };

  // setInterval(render, frameTime)
  window.requestAnimationFrame(render);

  // Eventos del teclado
  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => actor.keyboardEventUp(e.key));
  });
});
