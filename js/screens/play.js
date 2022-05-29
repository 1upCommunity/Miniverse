class PlayerDrawer {
  constructor (player) {
    this.player = player
    this.players_data = []

    firebase
      .firestore()
      .collection('Users')
      .onSnapshot((snapshot) => {
        this.players_data = []
        snapshot.forEach((doc) => {
          this.players_data.push(doc.data())
        })
      })
  }

  draw () {
    for (let i = 0; i < this.players_data.length; i++) {
      push()
      translate(this.players_data[i].x, this.players_data[i].y)
      translate(-camera.x, -camera.y)
      fill('white')
      textSize(32)
      text(
        this.players_data[i].name,
        -textWidth(this.players_data[i].name) / 2,
        -32
      )

      ellipse(0, 0, 32, 32)
      pop()
    }
  }
}

class Play extends Screen {
  constructor (parent) {
    super('Play', parent)

    this.init = false
    this.player_drawer = new PlayerDrawer(this.player)
    this.position = [110, 110]
    this.velX = 0
    this.velY = 0
    this.friction = 0.9
    this.terminalVel = 50
  }

  preload () {
    this.image = loadImage('assets/Miniverse.png')
  }

  draw () {
    camera.x = this.position[0] - window.innerWidth / 2
    camera.y = this.position[1] - window.innerHeight / 2

    if (!this.init) {
      this.user_ref = firebase
        .firestore()
        .collection('Users')
        .doc(localStorage.getItem('name'))
      this.user_ref.set({
        pet: null,
        x: this.position[0],
        y: this.position[1],
        server: false,
        name: localStorage.getItem('name')
      })

      // when the window closes, delete the user
      window.addEventListener('beforeunload', () => {
        this.user_ref.delete()
      })

      this.init = true
    }
    background(0)
    this.player_drawer.draw()

    this.user_ref = firebase
      .firestore()
      .collection('Users')
      .doc(localStorage.getItem('name'))
    this.user_ref.set({
      pet: null,
      x: this.position[0],
      y: this.position[1],
      server: false,
      name: localStorage.getItem('name')
    })

    // wasd movement
    if (keyIsDown(87)) {
      this.velY -= 1
    }
    if (keyIsDown(83)) {
      this.velY += 1
    }
    if (keyIsDown(65)) {
      this.velX -= 1
    }
    if (keyIsDown(68)) {
      this.velX += 1
    }

    // clamp velocity
    this.velX = constrain(this.velX, -this.terminalVel, this.terminalVel)
    this.velY = constrain(this.velY, -this.terminalVel, this.terminalVel)

    // friction
    this.velX *= this.friction
    this.velY *= this.friction

    this.position[0] += this.velX
    this.position[1] += this.velY
  }
}
