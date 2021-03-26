import { Spaceship } from "./actors/Spaceship";
import { Asteroid} from "./actors/Asteroid";
import { Manager } from "./manager";

window.addEventListener("load", () => {
  // Get a reference to canvas dom tag
  const canvas = document.getElementById("root");

  // Get the 2D context
  const ctx = canvas.getContext("2d");
  
  // Instancio variable con el Manager
  const myManager = new Manager();

  // Instancio mis actores fijos durante todo el juego
  const actors = [
    new Spaceship()
  ];
  
  // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
  let lastFrame = 0;

  const render = (time) => {
    let enemies = [...myManager.asteroids]; // traigo el array de asteroides creado cada 5 segundos
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    enemies.forEach((asteroid) => myManager.getDistance(asteroid, actors[0]));
    const superActors = [...actors, ...enemies];
    superActors.forEach((actor) => actor.update && actor.update(delta));
    
    ctx.clearRect(0, 0, 800, 600); // Limpia el canvas

    // Actualiza juego y pinta actores
    superActors.forEach((actor) => {
      ctx.save(); // guarda el valor inicial para volver a restore y comenzar de nuevo
      actor.draw(ctx, delta);
      ctx.restore(); // restoring a saves state
    });

    myManager.start();
    

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
