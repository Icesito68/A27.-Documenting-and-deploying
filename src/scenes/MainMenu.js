import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.tileSprite(512, 384, 1024, 768, "background").setScrollFactor(0);

    const logo = this.add.image(512, 200, "logo").setScale(0.8);
    this.tweens.add({
      targets: logo,
      y: 220,
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    let playButton = this.add
      .text(512, 500, "PLAY", {
        fontFamily: "Arial Black",
        fontSize: 42,
        color: "#ffffff",
        backgroundColor: "#ff0000",
        padding: { x: 20, y: 10 },
        stroke: "#000000",
        strokeThickness: 6,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerover", () => playButton.setStyle({ fill: "#ffff00" }))
      .on("pointerout", () => playButton.setStyle({ fill: "#ffffff" }))
      .on("pointerdown", () => {
        this.scene.start("Game");
      });
  }
}
