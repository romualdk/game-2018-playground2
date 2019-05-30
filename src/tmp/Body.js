Math.radToDeg = function (radians) {
  return radians * CONST.RAD_TO_DEG
}

Math.clamp = function (value, min, max) {
  return Math.max(min, Math.min(max, value))
}

Math.fuzzyGreaterThan = function (a, b, epsilon) {
  if (epsilon === undefined) { epsilon = 0.0001 }

  return a > b - epsilon
}

Math.fuzzyLessThan = function (a, b, epsilon)
{
  if (epsilon === undefined) { epsilon = 0.0001 }

  return a < b + epsilon
}

/**
 * position
 * size
 * scale
 * center
 * halfSize
 * -
 * speed = velocity.magnitude
 * velocity
 * acceleration
 * drag
 * friction
 * gravity
 * -
 * angle
 * angularSpeed = abs(angularVelocity)
 * angularVelocity
 * angularAcceleration
 * angularDrag
 */
class Body {
  constructor (x, y, width, height) {
    this.position = [0, 0]
    this.size = [0, 0]
    this.scale = [1, 1]

    this.center = []
    this.halfSize = [Math.abs(this.size.x / 2), Math.abs(this.size.y / 2)]

    this.bounce = 0
    this.mass = 1
    this.speed = 0
    this.maxSpeed = 100

    this.velocity = [0, 0]
    this.maxVelocity = [50, 100]
    this.acceleration = [0, 0]

    this.force = [0, 0]
    this.drag = [1, 1]
    this.friction = [0, 0]
    this.gravity = [0, 9.8]

    this.angle = 0
    this.angularVelocity = 0
    this.angularAcceleration = 0
    this.angularDrag = 0
    this.maxAngularVelocity = 100

    this.falling = false
    this.jumping = false
  }

  computeVelocityX (velocity, maxVelocity, acceleration, gravity, friction, drag, time) {
    if (gravity) {
      velocity += gravity * time
    }

    if (friction) {
      // to do
    }

    if (acceleration) {
      velocity += acceleration * time
    } else if (drag) {
      drag *= time

      if (velocity - drag > -Number.EPSILON) {
        velocity -= drag
      } else if (velocity + drag < Number.EPSILON) {
        velocity += drag
      } else {
        velocity = 0
      }
    }

    velocity = Math.clamp(velocity.x, -maxVelocity, maxVelocity)

    return velocity
  }

  updateCenter () {
    this.center.set(this.position.x + this.halfSize.x, this.position.y + this.halfSize.y)
  }

  updateBounds () {
    // 
  }

  computeAngularVelocity (delta) {
    let velocity = this.angularVelocity
    let acceleration = this.angularAcceleration
    let drag = this.angularDrag
    let allowDrag = this.allowDrag
    let max = this.maxAngularVelocity

    if(acceleration) {
      velocity += acceleration * delta
    }
    else if (allowDrag && drag) {
      drag *= delta

      if(fuzzyGreaterThan(velocity - drag, 0, 0.1)) {
        velocity -= drag
      }
      else if(fuzzyLessThan(velocity + drag, 0, 0,.1)) {
        velocity += drag
      }
      else {
        velocity = 0
      }
    }

    velocity = clamp(velocity, -max, max)

    let velocityDelta = velocity - this.angularVelocity
    this.angularVelocity += velocityDelta
    this.rotation += this.angularVelocity * delta
  }

  computeVelocity (delta) {
    let velocity = this.velocity
    let acceleration = this.acceleration

    let force = this.force
    
    let drag = this.drag

    let speed = this.speed
    let maxSpeed = this.maxSpeed

    let gravity = this.gravity

    let allowDrag = this.allowDrag
    let allowGravity = this.allowGravity

    // Force

    // Gravity

    // Acceleration
    if (allowGravity) {
      velocity.x += gravity.x * delta
      velocity.y += gravity.y * delta
    }

    if (acceleration.x) {
      velocity.x += acceleration.x * delta
    }
    else if (allowDrag && drag.x) {
      drag.x *= delta

      if (fuzzyGreaterThan(velocity.x - drag.x, 0, 0.01)) {
        velocity.x -= drag.x
      }
      else if (fuzzyLessThan(velocity.x + drag.x, 0, 0.01)) {
        velocity.x += drag.x
      }
      else {
        velocity.x = 0
      }
    }

    if (acceleration.y) {
      velocity.y += acceleration.y * delta
    }
    else if (allowDrag && drag.y) {
      drag.y *= delta
      
      if (fuzzyGreaterThan(velocity.y - drag.y, 0, 0.01)) {
        velocity.y -= drag.y
      }
      else if (fuzzyLessThan(velocity.y + drag.y, 0, 0.01)) {
        velocity.y += drag.y
      }
      else {
        velocity.y = 0
      }
    }

    velocity.x = Math.clamp(velocity.x, -max.x, max.x)
    velocity.y = Math.clamp(velocity.y, -max.y, max.y)

    this.velocity = velocity

    if (maxSpeed > -1 && this.velocity.length() > maxSpeed) {
      this.velocity.normalize().scale(maxSpeed)
    }
  }

  onFloor () {

  }

  onCeiling () {

  }

  onWall () {

  }

  drawDebug (graphic) {

  }

}

export default Body
