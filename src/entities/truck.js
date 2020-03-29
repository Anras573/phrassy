import Phaser from 'phaser'

class Truck extends Phaser.GameObjects.Image {
  constructor (config) {
    super(config.scene, config.x, config.y, config.texture)

    console.log(config)

    this.scene = config.scene
    this.velocity = config.velocity

    this.setScale(3)

    config.scene.add.existing(this)
  }

  update () {
    const gameHeight = this.scene.sys.game.config.height
    this.y += this.velocity

    if (this.velocity > 0 && this.y >= gameHeight + this.height) {
      this.y = 0 - this.height
    } else if (this.velocity < 0 && this.y <= 0 - this.height) {
      this.y = gameHeight + this.height
    }
  }
}

export default Truck
