function calcTotalTime() {
    let time = 0
    _$.box._ls.forEach(box => {
        time += box.tune.keep || env.tune.defaultTestTime
    })
    return time
}
