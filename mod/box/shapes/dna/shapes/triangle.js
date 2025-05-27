function onClone(st) {
    augment(this, {
        x: rx(.5),
        y: ry(.5),
        r: rx(.1),
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

    const { x, y, r, angle } = this
    const langle = angle - PI2/3,
          rangle = angle + PI2/3

    save()
    translate(x, y)

    triangle(
        r * cos(angle),  r * sin(angle),
        r * cos(langle), r * sin(langle),
        r * cos(rangle), r * sin(rangle),
    )

    restore()
}
