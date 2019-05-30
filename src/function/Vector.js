/**
 * Vector math
 *
 */

export function fromXY (x, y) {
  return {
    x: x,
    y: y
  }
}

export function fromArray (a) {
  return {
    x: a[0],
    y: a[1]
  }
}

export function fromObject (a) {
  return {
    x: a.x,
    y: a.y
  }
}

export function zero () {
  return {
    x: 0,
    y: 0
  }
}

export function one () {
  return {
    x: 1,
    y: 1
  }
}

export function add (a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  }
}

export function subtract (a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
}

export function multiply (a, b) {
  return {
    x: a.x * b.x,
    y: a.y * b.y
  }
}

export function divide (a, b) {
  return {
    x: a.x / b.x,
    y: a.y / b.y
  }
}

export function scale (a, scalar) {
  return {
    x: a.x * scalar,
    y: a.y * scalar
  }
}

export function rotate (a, angle) {
  let cos = Math.cos(angle)
  let sin = Math.sin(angle)

  return {
    x: a.x * cos - a.y * sin,
    y: a.x * sin + a.y * cos
  }
}

export function invert (a) {
  return {
    x: -a.x,
    y: -a.y
  }
}

export function dot (a, b) {
  return a.x * b.x + a.y * b.y
}

export function cross (a, b) {
  return a.x * b.y - a.y * b.x
}

export function length (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y)
}

export function squaredLength (a) {
  return a.x * a.x + a.y * a.y
}

export function distance (a, b) {
  let x = b.x - a.x
  let y = b.y - a.y

  return Math.sqrt(x * x + y * y)
}

export function squaredDistance (a, b) {
  let x = b.x - a.x
  let y = b.y - a.y

  return x * x + y * y
}

export function normalize (a) {
  let length = a.x * a.x + a.y * a.y

  if (length > 0) {
    length = Math.sqrt(length)

    return {
      x: a.x / length,
      y: a.y / length
    }
  }

  return {
    x: a.x,
    y: a.y
  }
}

export function project (a, b) {
  let coefficient = (a.x * b.x + a.y * b.y) / (b.x * b.x + b.y * b.y)

  return {
    x: b.x * coefficient,
    y: b.y * coefficient
  }
}

export function angle (a) {
  return Math.atan2(a.y, a.x)
}

export function angleBetween (a, b) {
  return Math.atan2(b.y - a.y, b.x - a.x)
}

export function min (a, b) {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y)
  }
}

export function max (a, b) {
  return {
    x: Math.max(a.x, b.x),
    y: Math.max(a.y, b.y)
  }
}

export function abs (a) {
  return {
    x: Math.abs(a.x),
    y: Math.abs(a.y)
  }
}

export function clamp (a, lower, upper) {
  return {
    x: Math.min(Math.max(a.x, lower.x), upper.x),
    y: Math.min(Math.max(a.y, lower.y), upper.y)
  }
}

export function lerp (a, b, t) {
  return {
    x: (1 - t) * a.x + t * b.x,
    y: (1 - t) * a.y + t * b.y
  }
}

export function ease (a, b, t, func) {
  return lerp(a, b, func(t))
}
