/* global performance, requestAnimationFrame, cancelAnimationFrame */

const FPS = 60
const DELTA = 1000 / FPS
const STEP = 1 / FPS

class MainLoop {
  constructor (state) {
    this.raf = null
    this.setState(state)
    this.start()
  }

  setState (state) {
    this.state = state
    this.state.init()
  }

  start () {
    this.now = performance.now()
    this.last = this.now
    this.dt = 0
    this.accumulator = 0

    requestAnimationFrame(this.step)
  }

  stop () {
    cancelAnimationFrame(this.raf)
  }

  step () {
    this.raf = requestAnimationFrame(this.step)

    this.now = performance.now()
    this.dt = this.now - this.last
    this.last = this.now

    if (this.dt > 1000) {
      return
    }

    this.state.prepare()
    this.accumulator += this.dt

    while (this.accumulator >= DELTA) {
      this.state.update(STEP)
      this.accumulator -= DELTA
    }

    this.state.render()
  }
}

export default MainLoop
