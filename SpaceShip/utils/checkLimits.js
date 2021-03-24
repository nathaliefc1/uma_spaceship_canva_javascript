const checkLimits = (pos) => {
  if (pos.x < 600 && pos.x > 0 && pos.y < 400 && pos.y > 0) {
    return true;
  }
  return false;
};

export default checkLimits;
