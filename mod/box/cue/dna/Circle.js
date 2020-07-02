const SPEED = 7

function Circle(st) {
    this.dx = RND(SPEED*2) - SPEED
    this.dy = RND(SPEED*2) - SPEED
    this.color = hsl(.6, .4, .6)
    augment(this, st) 
}

Circle.prototype.evo = function(dt) {
    this.x += this.dx * dt
    this.y += this.dy * dt
}

Circle.prototype.draw = function() {
    fill(this.color)
    circle(this.x, this.y, this.r)
}
