function onClone(st) {
    augment(this, {
        x: rx(.5),
        y: ry(.5),
        r: rx(.1),
        aspect: .5 + rnd(),
        angle: math.rnda(),
        color: {
            h: .5,
            s: .5,
            l: .5,
        }
    }, st)
}

function draw() {
    fill( hsl(this.color.h, this.color.s, this.color.l) )
    ellipse(this.x, this.y, this.r, this.r * this.aspect, this.angle)
}
