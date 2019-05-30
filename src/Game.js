/* global performance, requestAnimationFrame */
const game = {}

/**
 * Main loop
 * https://gafferongames.com/post/fix_your_timestep/
 */

let now
let dt = 0
let last = performance.now()
// const slow = 0.1;
// const step = 1 / 60;
// const slowStep = slow * step;

function mainloop () {
  now = performance.now()
  dt = (now - last) / 1000

  game.state.prepare()
  game.state.update(dt)
  game.state.draw()

  last = now

  requestAnimationFrame(mainloop)
}

export function setScreen (width, height) {
  game.screen = document.getElementById('canvas')
  game.screen.ctx = game.screen.getContext('2d')
  game.screen.width = width
  game.screen.height = height
}

export function setState (state) {
  game.state = state
  game.state.game = game
  state.init()
}

export function Game (width, height, state) {
  setScreen(width, height)
  setState(state)
  mainloop()
}

export default Game
