export const loadSpritesheets = loader => {
  loader.atlas(
    "farm",
    "assets/spritesheets/farm.png",
    "assets/spritesheets/farm.json"
  );
};

export const addFromSpritesheet = (adder, { x = 128, y = 128, name } = {}) => {
  return adder.sprite(x, y, "farm", name);
};
