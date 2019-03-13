import Phaser from "phaser";
import { loadTilemaps } from "../utils/tilemaps";
import { loadSpritesheets } from "../utils/spritesheets";

export default class extends Phaser.Scene {
  constructor() {
    super({ key: "SplashScene" });
  }

  preload() {
    //
    // load your assets
    //
    this.load.spritesheet("dude", "assets/spritesheets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    });
    loadTilemaps(this.load);
    loadSpritesheets(this.load);
  }

  create() {
    this.scene.start("GameScene");
  }
}
