function onSpawn(st) {
    this.x = rx(.5)
    this.y = ry(.5)
    this.r = rx(.1)
    this.h = .5
    this.s = .5
    this.l = .5
    augment(this, st)
}

function draw() {
    fill(hsl(this.h, this.s, this.l))
    rect(this.x, this.y, this.r, this.r)
}
