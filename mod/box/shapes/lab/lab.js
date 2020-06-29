
let id = 0

function evo(dt) {
    lab.spawn('circle', {
        name: 'shape' + (++id),
        x: RND(rx(1)),
        y: RND(ry(1)),
        r: 20 + RND(100),
        h: rnd(),
    })
}
