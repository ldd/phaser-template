export const addAnimation = (
  animations,
  key,
  name,
  start = 0,
  end = 3,
  frameRate = 10,
  repeat = -1
) => {
  animations.create({
    key,
    frames: animations.generateFrameNumbers(name, { start, end }),
    frameRate,
    repeat
  });
};

export const addStillAnimation = (
  animations,
  key,
  frameKey,
  frameIndex = 0,
  frameRate = 20
) =>
  animations.create({
    key,
    frames: [{ key: frameKey, frame: frameIndex }],
    frameRate
  });

export const addAnimations = (animations, name) => {
  addAnimation(animations, "left", name, 0, 3);
  addStillAnimation(animations, "turn", name, 4);
  addAnimation(animations, "right", name, 5, 8);
};
