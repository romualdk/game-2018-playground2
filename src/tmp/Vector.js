/**
 * Vector math
 *
 * Euclidean vectors math
 * also helpful with points (i.e. distance, angle)
 */

const Vector = {
  create: function (x, y) {
    return [x, y]
  },

  clone: function (a) {
    return [a[0], a[1]]
  },

  zero: function () {
    return [0, 0]
  },

  unit: function () {
    return [1, 1]
  },

  add: function (a, b) {
    return [
      a[0] + b[0],
      a[1] + b[1]
    ]
  },

  subtract: function (a, b) {
    return [
      a[0] - b[0],
      a[1] - b[1]
    ]
  },

  sub: function (a, b) {
    return Vector.subtract(a, b)
  },

  multiply: function (a, b) {
    return [
      a[0] * b[0],
      a[1] * b[1]
    ]
  },

  mul: function (a, b) {
    return Vector.multiply(a, b)
  },

  divide: function (a, b) {
    return [
      a[0] / b[0],
      a[1] / b[1]
    ]
  },

  div: function (a, b) {
    return Vector.divide(a, b)
  },

  scale: function (a, scalar) {
    return [
      a[0] * scalar,
      a[1] * scalar
    ]
  },

  rotate: function (a, angle) {
    let x = a[0]
    let y = a[1]
    let cos = Math.cos(angle)
    let sin = Math.sin(angle)

    return [
      x * cos - y * sin,
      x * sin + y * cos
    ]
  },

  invert: function (a) {
    return [
      -a[0],
      -a[1]
    ]
  },

  negate: function (a) {
    return Vector.invert(a)
  },

  dot: function (a, b) {
    return a[0] * b[0] + a[1] * b[1]
  },

  cross: function (a, b) {
    return a[0] * b[1] - a[1] * b[0]
  },

  length: function (a) {
    let x = a[0]
    let y = a[1]

    return Math.sqrt(x * x + y * y)
  },

  len: function (a) {
    return Vector.length(a)
  },

  squaredLength: function (a) {
    let x = a[0]
    let y = a[1]

    return x * x + y * y
  },

  sqrLen: function (a) {
    return Vector.squaredLength(a)
  },

  distance: function (a, b) {
    let x = b[0] - a[0]
    let y = b[1] - a[1]

    return Math.sqrt(x * x + y * y)
  },

  dist: function (a, b) {
    return Vector.distance(a, b)
  },

  squaredDistance: function (a, b) {
    let x = b[0] - a[0]
    let y = b[1] - a[1]

    return x * x + y * y
  },

  sqrDist: function (a, b) {
    return Vector.squaredDistance(a, b)
  },

  normalize: function (a) {
    let x = a[0]
    let y = a[1]
    let len = x * x + y * y

    if (len > 0) {
      len = Math.sqrt(len)

      return [
        x / len,
        y / len
      ]
    }

    return [x, y]
  },

  norm: function (a) {
    return Vector.normalize(a)
  },

  project: function (a, b) {
    let coeff = (a[0] * b[0] + a[1] * b[1]) / (b[0] * b[0] + b[1] * b[1])

    return [
      coeff * b[0],
      coeff * b[1]
    ]
  },

  angle: function (a) {
    return Math.atan2(a[1], a[0])
  },

  phi: function (a) {
    return Vector.angle(a)
  },

  min: function (a, b) {
    return [
      Math.min(a[0], b[0]),
      Math.min(a[1], b[1])
    ]
  },

  max: function (a, b) {
    return [
      Math.max(a[0], b[0]),
      Math.max(a[1], b[1])
    ]
  },

  abs: function (a) {
    return [
      Math.abs(a[0]),
      Math.abs(a[1])
    ]
  },

  clamp: function (a, lower, upper) {
    return [
      Math.min(Math.max(a[0], lower[0]), upper[0]),
      Math.min(Math.max(a[1], lower[1]), upper[1])
    ]
  },

  lerp: function (a, b, t) {
    return [
      (1 - t) * a[0] + t * b[0],
      (1 - t) * a[1] + t * b[1]
    ]
  }
}

export default Vector
