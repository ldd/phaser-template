import Phaser from "phaser";

import Player from "../sprites/Player";
import { addAnimations } from "../utils/animations";
import { createTilemaps } from "../utils/tilemaps";
import { addFromSpritesheet } from "../utils/spritesheets";
import { collider } from "../systems/collider";

export default class extends Phaser.Scene {
  cursors;

  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    createTilemaps(this.make);

    this.player = new Player({
      scene: this,
      x: 400,
      y: 300,
      asset: "dude"
    });
    this.add.existing(this.player);
    addAnimations(this.anims, "dude");
    const corn = addFromSpritesheet(this.physics.add, {
      name: "big_crops/wheat_5"
    });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.world.enableBody(this.player);
    this.physics.add.overlap(this.player, corn, collider);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.x += 5;
      this.player.anims.play("right", true);
    } else {
      this.player.anims.play("turn");
      if (this.cursors.up.isDown) {
        this.player.y -= 5;
      } else if (this.cursors.down.isDown) {
        this.player.y += 5;
      }
    }
  }
}
