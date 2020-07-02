function init() {
    this.timer = 0
    this.ibox = -1
}

function enableBox(box) {
    if (this.box) {
        mod.detachByName(this.box.name)
    }

    this.box = box
    if (box.tune && box.tune.keep) this.timer = this.box.tune.keep
    env.statusInfo.case = box.name
    sys.enableBox(_, box, true)

    box.Z = 11
    mod.status.Z = 101
}

function nextBox() {
    this.ibox ++
    if (this.ibox >= _$.box._ls.length) {
        if (env.config.loop) {
            env.complete = false
        } else {
            env.complete = true
            env.statusInfo.status = 'Test Complete'
        }
        this.ibox = 0
        env.timeLeft = env.totalTime
    }

    this.enableBox(_$.box._ls[this.ibox])
}

function prevBox() {
    this.ibox --
    if (this.ibox < 0) {
        this.ibox = _$.box._ls.length - 1
    }
    this.enableBox(_$.box._ls[this.ibox])
}

function evo(dt) {
    this.timer -= dt
    if (this.timer < 0) {
        this.timer = env.tune.defaultTestTime
        this.nextBox()
    }

    env.timeLeft -= dt
    env.statusInfo.timeLeft = ceil(env.timeLeft)
}
