/**
 * Math extensions
 *
 * Well known, frequentyly used, math functions and constants
 */

// Math.EPSILON polyfill
// https://github.com/noonat/intersect
if (!Math.EPSILON) {
  Math.EPSILON = 1e-8
}

// Math.DEG_PER_RAD polyfill
// https://github.com/rwaldron/proposal-math-extensions
if (!Math.DEG_PER_RAD) {
  Math.DEG_PER_RAD = Math.PI / 180
}

// Math.RAD_PER_DEG polyfill
// https://github.com/rwaldron/proposal-math-extensions
if (!Math.RAD_PER_DEG) {
  Math.RAD_PER_DEG = 180 / Math.PI
}

// Math.clamp polyfill
// https://github.com/rwaldron/proposal-math-extensions
if (!Math.clamp) {
  Math.clamp = function (x, lower, upper) {
    return Math.min(upper, Math.max(lower, x))
  }
}

// Math.sign polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
// Present in ECMAScript 2020
// https://tc39.github.io/ecma262/#sec-math.sign
if (!Math.sign) {
  Math.sign = function (x) {
    return ((x > 0) - (x < 0)) || +x
  }
}
