class TestState {
  init () {
    let screen = this.game.screen
    let min = Math.min(screen.width, screen.height)

    this.entities = []

    this.radius = min / 3
    this.angle = 0
    this.speed = 100
    this.innerAngle = 0
    this.innerSpeed = -50
    this.width = min / 10
    this.height = min / 10
    this.centerX = screen.width / 2
    this.centerY = screen.height / 2
    this.x = 0
    this.y = 0
  }

  prepare () {
    // i.e. check controls
  }

  update (dt) {
    this.angle += this.speed * dt
    this.innerAngle += this.innerSpeed * dt
    this.x = this.centerX + this.radius * Math.cos(Math.PI / 180 * this.angle)
    this.y = this.centerY + this.radius * Math.sin(Math.PI / 180 * this.angle)
  }

  draw () {
    let screen = this.game.screen
    let ctx = this.game.screen.ctx

    ctx.fillStyle = 'rgba(200,200,200,1)'
    ctx.fillRect(0, 0, screen.width, screen.height)

    ctx.save()
    ctx.fillStyle = 'rgba(0,0,0,1)'

    ctx.translate(this.x, this.y)
    ctx.rotate(Math.PI / 180 * this.innerAngle)
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
    ctx.restore()
  }
}

export default TestState
