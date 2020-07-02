const Z = 1

let timer = 0
let frame = 0

function evo(dt) {
    timer += dt
    if (timer > .1) {
        // select the next frame for the bat
        timer = 0
        frame = warp(frame + 1, 0, 3)
    }
}

function draw() {
    blocky()

    // draw the lander
    const w = res.lander.width
    const h = res.lander.height
    image(res.lander, rx(.5)-2*w, ry(.6), 4*w, 4*h)

    // draw the bat
    res.spritesheets.bat.draw(frame, rx(.6), ry(.2),
           200, 200)

    // draw the text
    fill(.25, .5, .5)
    font('16px prstart')
    baseTop()
    alignLeft()
    const tw = textWidth(res.msg.message) + 40
    const th = textHeight()
    text(res.msg.message, 40, ry(.1))

    lineWidth(3)
    stroke(res.data['line-color'])
    const y = ry(.1) + th + 5
    line(40, y, tw, y)
}
