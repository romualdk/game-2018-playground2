/* global HTMLCanvasElement */

class Screen {
  constructor (width, height, element) {
    if (element instanceof HTMLCanvasElement ) {
      this.canvas = document.getElementById(element)
    } else {
      this.canvas = document.createElement('canvas')
    }

    this.context = this.canvas.getContext('2d')
    this.canvas.width = width
    this.canvas.height = height
  }

  init () {

  }

  reset () {

  }

  resize () {

  }

  draw () {

  }
}

export default Screen

/*
const Screen = {}

initScreen()

function initScreen (width = 256, height = 240) {
  Screen.width = width
  Screen.height = height
  Screen.scale = 1

  Screen.canvas = document.createElement('canvas')
  Screen.context = Screen.canvas.getContext('2d')

  Screen.canvas.width = Screen.width
  Screen.canvas.height = Screen.height

  Screen.physicalCanvas = document.getElementById('screen')
  Screen.physicalContext = Screen.physicalCanvas.getContext('2d')

  window.addEventListener('resize', resizeScreen, false);

  resizeScreen()
  resetScreen()
  drawScreen()
}

function resizeScreen () {
  const minScale = 1
  const maxScale = 3

  let scale = Math.floow(window.innerWidth / Screen.width)

  if (scale < minScale) {
    scale = minScale
  } else if (scale > maxScale) {
    scale = maxScale
  }

  let width = Screen.width * scale
  let height = Screen.height * scale

  Screen.scale = scale
  Screen.physicalCanvas.width = width
  Screen.physicalCanvas.height = height

  let left = Math.floor((window.innerWidth - width) / 2)
  let top = Math.floor((window.innerHeight - height) / 2)

  Screen.physicalCanvas.style.left = left + 'px'
  Screen.physicalCanvas.style.top = top + 'px'
}

function resetScreen () {
  Screen.context.clearRect(0, 0, Screen.canvas.width, Screen.canvas.height)
}

function drawScreen () {
  Screen.physicalContext.drawImage(Screen.canvas, 0, 0, Screen.width, Screen.height, 0, 0, Screen.physicalCanvas.width, Screen.physicalCanvas.height)
}
*/
