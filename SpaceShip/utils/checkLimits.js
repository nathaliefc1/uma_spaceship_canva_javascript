const checkLimits = (pos) => {
  if (pos.x < 800 && pos.x > 0 && pos.y < 600 && pos.y > 0) {
    return true;
  }
  return false;
};

export default checkLimits;
