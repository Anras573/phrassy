import Phaser from 'phaser'

class Friend extends Phaser.GameObjects.Image {
  constructor (config) {
    super(config.scene, config.x, config.y, config.texture)

    this.scene = config.scene

    this.setScale(2)

    config.scene.add.existing(this)
  }
}

export default Friend
