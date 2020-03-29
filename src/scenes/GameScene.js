import Phaser from 'phaser'
import Player from '../entities/player'
import Friend from '../entities/friend'
import Trucks from '../entities/collections/trucks'
import backgroundImage from '../../assets/background.png'
import playerImage from '../../assets/player.png'
import friendImage from '../../assets/friend.png'
import truckDownImage from '../../assets/truck_down.png'
import truckUpImage from '../../assets/truck_up.png'
import ImageHelper from '../helpers/imagehelper'
import Constants from '../helpers/constants'
import { cameraShakeComplete, cameraFadeOutComplete } from '../helpers/events'

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {
    this.isGameOver = false
  }

  preload () {
    this.load.image(Constants.background(), ImageHelper.PathToImage(backgroundImage))
    this.load.image(Constants.player(), ImageHelper.PathToImage(playerImage))
    this.load.image(Constants.friend(), ImageHelper.PathToImage(friendImage))
    this.load.image(Constants.truckDown(), ImageHelper.PathToImage(truckDownImage))
    this.load.image(Constants.truckUp(), ImageHelper.PathToImage(truckUpImage))
  }

  create () {
    const gameWidth = this.sys.game.config.width
    const gameHeight = this.sys.game.config.height

    const background = this.add.image(0, 0, Constants.background())
    background.setPosition(gameWidth / 2, gameHeight / 2)
    background.setScale(2)

    this.player = new Player({
      scene: this,
      x: 15,
      y: gameHeight / 2 - 3,
      texture: Constants.player()
    })

    this.friend = new Friend({
      scene: this,
      x: gameWidth - 15,
      y: gameHeight / 2 - 3,
      texture: Constants.friend()
    })

    this.trucks = new Trucks({
      scene: this,
      gameHeight: gameHeight,
      minSpeed: 2,
      maxSpeed: 3.5
    })
  }

  update () {
    if (this.isGameOver) {
      return
    }

    this.player.update()

    const playerRect = this.player.getBounds()
    const friendRect = this.friend.getBounds()

    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, friendRect)) {
      return this.gameOver(true)
    }

    const trucks = this.trucks.getChildren()

    for (let i = 0; i < trucks.length; i++) {
      trucks[i].update()
      const truckRect = trucks[i].getBounds()
      if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, truckRect)) {
        return this.gameOver(false)
      }
    }
  }

  gameOver (playerHasWon) {
    this.isGameOver = true

    if (playerHasWon) {
      this.cameras.main.fade(500)
    } else {
      this.cameras.main.shake(500)
    }

    this.cameras.main.on(cameraShakeComplete, () => {
      this.cameras.main.fade(500)
    }, this)

    this.cameras.main.on(cameraFadeOutComplete, () => {
      this.scene.restart()
    }, this)
  }
}

export default GameScene
