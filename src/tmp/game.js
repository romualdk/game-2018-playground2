import { aabb } from 'aabb-2d'

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
canvas.width = 300
canvas.height = 200

let speed = 0.1
let speedout = 0.1

let field = [
  1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 1, 0, 1,
  1, 0, 0, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1
]

let colors = ['rgba(255,255,255,1)', 'rgba(0,0,0,1)']
let tilesize = 16
let player = aabb([18, 18], [tilesize / 1, tilesize / 1])
let wantDirX = 0
let wantDirY = 0
let vec = vec2.create()

let dimensions = [Math.sqrt(field.length) >> 0, Math.sqrt(field.length) >> 0]
let offset = [0, 0]
let coords = [0, 0]

let collided = []

function getTile (x, y) {
  return this[x + y * dimensions[1]]
}

function update (dt) {
  offset = [0, 0, 0]
  coords = [0, 0]

  canvas.width = canvas.width
  vec[0] = wantDirX * dt * speed
  vec[1] += 1 * dt * 0.2
  vec[1] += wantDirY * dt * 0.333

  collide(player, vec, function (axis, tile, coords, dir, dd) {

    if (tile) {
      vec[axis] = dd
      return true
    }
  })
}

function draw () {
  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
      rect(colors[field[x + (y * 8)]], [x * tilesize, y * tilesize], [tilesize, tilesize])
    }
  }

  rect('rgba(255,0,0,1)', player.base, player.vec)
}

function rect (color, base, vec) {
  context.fillStyle = color
  context.fillRect(
    base[0], base[1]
    , vec[0], vec[1]
  )
}

document.addEventListener('keydown', function (ev) {
  switch (String.fromCharCode(ev.keyCode)) {
    case 'W': wantDirY = -1; break
    case 'S': wantDirY = +1; break
    case 'A': wantDirX = -1; break
    case 'D': wantDirX = +1; break
  }
})

document.addEventListener('keyup', function (ev) {
  switch (String.fromCharCode(ev.keyCode)) {
    case 'W':
    case 'S': wantDirY = 0; break
    case 'A':
    case 'D': wantDirX = 0; break
  }
})
