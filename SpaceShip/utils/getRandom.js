const randomY = () => {
  return Math.floor(Math.random() * (400 - 1)) + 1;
};

const randomX = () => {
  return Math.floor(Math.random() * (0 + 300) - 300);
};

export { randomY, randomX };

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min;}
