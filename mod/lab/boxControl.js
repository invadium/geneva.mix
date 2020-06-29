const DEFAULT_TIME = 5

function init() {
    this.timer = 0
    this.ibox = -1
}

function nextBox() {
    this.ibox ++
    if (this.ibox >= _$.box._ls.length) {
        this.ibox = 0
    }

    if (this.box) {
        _$.mod.detachByName(this.box.name)
    }

    this.box = _$.box._ls[this.ibox]
    if (this.box.tune.keep) this.timer = this.box.tune.keep
    env.statusInfo.case = this.box.name
    sys.enableBox(_, this.box, true)
}

function evo(dt) {
    this.timer -= dt
    if (this.timer < 0) {
        this.timer = DEFAULT_TIME
        this.nextBox()
    }
}
