function onSpawn(st) {
    this.x = rx(.5)
    this.y = ry(.5)
    this.r = rx(.1)
    this.c = hue(.5, .5, .5)
    augment(this, st)
}

function draw() {
    fill(this.c)
    rect(this.x, this.y, this.r, this.r)
}
