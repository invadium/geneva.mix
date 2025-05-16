function setup() {

    lab.spawn('hud/Hud', {
        name: 'hud',
    })

    lab.hud.spawn('hud/gadget/Button', {
        name: 'button1',
        x: 40,
        y: ry(1) - 80,
        h: 40,
        w: 200,
        scale: 4,
        text: 'Play Sound',
    })

    after(lab.hud.button1, 'onMouseDown', function() {
        // play 'click.wav' from /res
        if (!_._$.env.config.silent) sfx(res.click)
    })
}
