import Phaser from "phaser";
import WebFont from "webfontloader";

export default class extends Phaser.Scene {
  fonstReady = false;

  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.add.text(100, 100, "loading fonts...");

    this.load.image("loaderBg", "./assets/images/loader-bg.png");
    this.load.image("loaderBar", "./assets/images/loader-bar.png");

    WebFont.load({
      google: {
        families: ["Press Start 2P"]
      },
      active: this.fontsLoaded
    });
  }

  update = () => {
    if (this.fontsReady) {
      this.scene.start("SplashScene");
    }
  };

  fontsLoaded = () => {
    this.fontsReady = true;
  };
}
