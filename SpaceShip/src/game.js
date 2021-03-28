import { Spaceship } from "./actors/Spaceship";
import { Asteroid } from "./actors/Asteroid";
import { myManager } from "./manager";

window.addEventListener("load", () => {
  // Get a reference to canvas dom tag
  const canvas = document.getElementById("root");
  const backgroundMusic = document.getElementById("background-music");
  // Get the 2D context
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  // Instancio mis actores fijos durante todo el juego
  const actors = [new Spaceship(), myManager];

  // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
  let lastFrame = 0;

  const render = (time) => {
    if (myManager.gameOver) {
      setTimeout(() => {
        window.cancelAnimationFrame(0);
        const startAgain = window.confirm(`Game over! \nYour score is: ${myManager.getChrono()}\nStart again?`);
        if (startAgain) {
          console.log('yes');
        } else {
          window.close();
        }
        return;
      }, 300)
    }
    let enemies = [...myManager.asteroids]; // traigo el array de asteroides creado cada 5 segundos

    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    enemies.forEach((asteroid, i) => {
      myManager.getDistance(asteroid, actors[0]);
      if (asteroid.pos.x >= asteroid.canvasWidth) {
        enemies.splice(i, 1);
      }
    });
    const superActors = [...actors, ...enemies];
    superActors.forEach((actor) => actor.update && actor.update(delta));

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

    // Actualiza juego y pinta actores
    superActors.forEach((actor) => {
      ctx.save(); // guarda el valor inicial para volver a restore y comenzar de nuevo
      actor.draw(ctx, delta);
      ctx.restore(); // restoring a saves state
    });

    myManager.start(); // Pinta enemigos con SetInterval

    window.requestAnimationFrame(render);
  };

  // setInterval(render, frameTime)

  const startButton = document.getElementById("start-game");

  startButton.addEventListener("click", (e) => {
    backgroundMusic.play();
    window.requestAnimationFrame(render);
  })

  //window.requestAnimationFrame(render);

  // Eventos del teclado
  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });
  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => {
      actor.keyboardEventUp(e.key)
    });
  });
});
