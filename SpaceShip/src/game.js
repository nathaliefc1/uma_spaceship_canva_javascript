import { Spaceship } from "./actors/Spaceship";
import { myManager } from "./manager";
import { SpaceStation } from "./actors/SpaceStation";

window.addEventListener("load", () => {

  const canvas = document.getElementById("root");
  const backgroundMusic = document.getElementById("background-music");

  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;
  const mySpaceship = new Spaceship();

  const actors = [
    mySpaceship,
    myManager,
    new SpaceStation
  ];

  let lastFrame = 0;
  let endAnimFrame = 0;
  let over = false;

  const render = (time) => {
    let enemies = myManager.asteroids;
    let samples = myManager.snacks;
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;

    enemies.forEach((asteroid, i) => {
      myManager.getDistance(asteroid, actors[0], false);
      if (asteroid.pos.x >= asteroid.canvasWidth) {
        myManager.removeAsteroid(i);
      }
    });

    samples.forEach((snack, i) => {
      const distance = myManager.getDistance(snack, actors[0], true);
      if (snack.pos.y <= 0) {
        myManager.removeSnack(i);
      } else if (distance <= 30) {
        myManager.removeSnack(i);
        mySpaceship.eatSnack();
      }
    });

    const superActors = [...actors, ...enemies, ...samples];

    superActors.forEach((actor) => actor.update && actor.update(delta));

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    superActors.forEach((actor) => {
      ctx.save();
      actor.draw(ctx, delta);
      ctx.restore();
    });

    myManager.start();

    if (myManager.gameOver) {
      setTimeout(() => {
        over = true;
      }, 300);
    };
    if (over) {
      window.cancelAnimationFrame(endAnimFrame);
      const startAgain = window.confirm(
        `Game over! \nYour score is: ${myManager.getChrono()}\nStart again?`,
      );
      if (startAgain) {
        window.location.reload();
      } else {
        window.close();
      }
    } else {
      window.requestAnimationFrame(render);
    }
  };

  const startButton = document.getElementById("start-game");

  startButton.addEventListener("click", (e) => {
    backgroundMusic.play();
    endAnimFrame = window.requestAnimationFrame(render);
  });

  window.addEventListener("keydown", (e) => {
    actors.forEach((actor) => actor.keyboardEventDown(e.key));
  });

  window.addEventListener("keyup", (e) => {
    actors.forEach((actor) => {
      actor.keyboardEventUp(e.key);
    });
  });
});
