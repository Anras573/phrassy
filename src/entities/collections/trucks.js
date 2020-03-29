import Truck from '../truck'
import Random from '../../helpers/random'
import { truckUp, truckDown } from '../../helpers/constants'

class Trucks {
  constructor (config) {
    const gameHeight = config.gameHeight
    const minSpeed = config.minSpeed
    const maxSpeed = config.maxSpeed
    const scene = config.scene

    const directionUp = 1
    const directionDown = -1

    let speed = Random.between(minSpeed, maxSpeed)
    const road1Velocity = directionUp * speed
    speed = Random.between(minSpeed, maxSpeed)
    const road2Velocity = directionDown * speed
    speed = Random.between(minSpeed, maxSpeed)
    const road3Velocity = directionUp * speed
    speed = Random.between(minSpeed, maxSpeed)
    const road4Velocity = directionDown * speed
    speed = Random.between(minSpeed, maxSpeed)
    const road5Velocity = directionUp * speed

    this.trucks = [
      // Road 1
      new Truck({
        scene: scene,
        x: 65,
        y: gameHeight / 2 - 3,
        texture: truckDown,
        velocity: road1Velocity
      }),
      new Truck({
        scene: scene,
        x: 65,
        y: gameHeight - 80,
        texture: truckDown,
        velocity: road1Velocity
      }),
      new Truck({
        scene: scene,
        x: 65,
        y: 80,
        texture: truckDown,
        velocity: road1Velocity
      }),
      // Road 2
      new Truck({
        scene: scene,
        x: 190,
        y: gameHeight / 2 - 3,
        texture: truckUp,
        velocity: road2Velocity
      }),
      new Truck({
        scene: scene,
        x: 190,
        y: gameHeight - 80,
        texture: truckUp,
        velocity: road2Velocity
      }),
      new Truck({
        scene: scene,
        x: 190,
        y: 80,
        texture: truckUp,
        velocity: road2Velocity
      }),
      // Road 3
      new Truck({
        scene: scene,
        x: 320,
        y: gameHeight / 2 - 3,
        texture: truckDown,
        velocity: road3Velocity
      }),
      new Truck({
        scene: scene,
        x: 320,
        y: gameHeight - 80,
        texture: truckDown,
        velocity: road3Velocity
      }),
      new Truck({
        scene: scene,
        x: 320,
        y: 80,
        texture: truckDown,
        velocity: road3Velocity
      }),
      // Road 4
      new Truck({
        scene: scene,
        x: 450,
        y: gameHeight / 2 - 3,
        texture: truckUp,
        velocity: road4Velocity
      }),
      new Truck({
        scene: scene,
        x: 450,
        y: gameHeight - 80,
        texture: truckUp,
        velocity: road4Velocity
      }),
      new Truck({
        scene: scene,
        x: 450,
        y: 80,
        texture: truckUp,
        velocity: road4Velocity
      }),
      // Road 5
      new Truck({
        scene: scene,
        x: 575,
        y: gameHeight / 2 - 3,
        texture: truckDown,
        velocity: road5Velocity
      }),
      new Truck({
        scene: scene,
        x: 575,
        y: gameHeight - 80,
        texture: truckDown,
        velocity: road5Velocity
      }),
      new Truck({
        scene: scene,
        x: 575,
        y: 80,
        texture: truckDown,
        velocity: road5Velocity
      })
    ]
  }

  getChildren () {
    return this.trucks
  }
}

export default Trucks
