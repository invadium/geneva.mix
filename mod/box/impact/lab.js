const RAIN = 1

let r = 50
let x = rx(.5)
let y = ry(.5)
let a = 0

let dx = ry(.2)
let dy = ry(.2)
let da = -.25 * PI

let impacts = 0
const asteroids = []

function init() {
    lab.background = '#050508'
}

function spawnAsteroid() {

    asteroids.push({
        r: 15 + 25*rnd(),
        x: rnd(rx(1)),
        y: -50,
        a:  0,
        dx: rnd(ry(.2)) - ry(.1),
        dy: ry(.2),
        da: .2*HALF_PI + rnd()*HALF_PI,

        evo: function(dt) {
            this.x += this.dx * dt
            this.y += this.dy * dt
            this.a += this.da * dt

            // planet collision
            const d = distance(this.x, this.y, x, y)
            if (d < (this.r + r)) {
                // boom!
                res.impact.currentTime = 0 
                if (!_._$.env.config.silent) sfx(res.impact)
                impacts ++
                this.toKill = true
            }
        },

        draw: function() {
            save().translate(this.x, this.y).rotate(this.a)
            image(res.asteroid, -this.r, -this.r, 2*this.r, 2*this.r)
            restore()
        }, 

        kill: function() {
            const i = asteroids.indexOf(this)
            asteroids.splice(i, 1)
        }
    })
}

function boing() {
    res.boing.currentTime = 0 
    if (!_._$.env.config.silent) sfx(res.boing)
}

function evo(dt) {
    x += dx * dt
    y += dy * dt
    a += da * dt

    // bounce off the screen edges
    if ((dx > 0 && x >= rx(1)-r) || (dx < 0 && x < r)) {
        dx *= -1
        boing()
    }
    if ((dy > 0 && y >= ry(1)-r) || (dy < 0 && y < r)) {
        dy *= -1
        boing()
    }

    let toKill
    asteroids.forEach(a => {
        a.evo(dt)
        if (a.y > 1.2*ry(1) || a.toKill) toKill = a
    })
    if (toKill) toKill.kill()
    if (rnd() < RAIN*dt) spawnAsteroid()
}

function drawPlanet() {
    save()
    translate(x, y)
    rotate(a)

    lineWidth(4)
    stroke(.6, .5, .5)
    circle(0, 0, r)
    image(res.planet, -r, -r, 2*r, 2*r)

    restore()
}

function draw() {
    drawPlanet()
    asteroids.forEach(a => a.draw())

    font('36px moon')
    alignLeft()
    baseTop()
    fill('#b0c400')
    text('Hits: ' + impacts, 20, 20)
}
