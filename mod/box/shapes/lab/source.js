const MAX = 512
const PERIOD = .1

let id = 0
let timer = 0

function cleanShapes() {
    if (lab.shapes._ls.length > MAX) {
        lab.shapes.detach(lab.shapes._ls[0])
    }
}

function spawnShape() {
    const next = _$.lib.math.rnde(dna.shapes._ls)
    lab.shapes.spawn(next, {
        name: 'shape' + (++id),
        x: RND(rx(1)),
        y: RND(ry(1)),
        r: 20 + RND(100),
        h: rnd(),
    })
}

function evo(dt) {
    timer += dt
    
    if (timer >= PERIOD) {
        timer -= PERIOD
        cleanShapes()
        spawnShape()
    }
}
