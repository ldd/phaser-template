import { debounce } from "debounce";

export const simpleCollider = (A, B) => {
  const [, , current] = B.frame.name.split("_");
  if (+current > 1) {
    B.setFrame(`big_crops/wheat_${current - 1}`);
  }
};

export const collider = debounce(simpleCollider, 2000);
