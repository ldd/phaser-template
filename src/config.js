import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  parent: "content",
  width: 800,
  height: 600,
  localStorageName: "phaseres6webpack",
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 300 },
      // debug: false
    }
  }
};
