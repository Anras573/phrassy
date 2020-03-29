import Phaser from 'phaser'

class player extends Phaser.GameObjects.Image {
  constructor (config) {
    super(config.scene, config.x, config.y, config.texture)

    this.scene = config.scene

    this.setScale(2)
    this.velocity = 2

    config.scene.add.existing(this)
  }

  update () {
    if (this.scene.input.activePointer.isDown) {
      this.x += this.velocity
    }
  }
}

export default player
