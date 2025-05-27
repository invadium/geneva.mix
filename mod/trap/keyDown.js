function keyDown(e) {
    if (e.repeat) return

    switch(e.code) {
        case 'Space':
            lab.boxControl.nextBox()
            lab.boxControl.paused = false
            break

        case 'ArrowRight':
            lab.boxControl.nextBox()
            lab.boxControl.paused = true
            break

        case 'ArrowLeft':
            lab.boxControl.prevBox()
            lab.boxControl.paused = true
            break

        case 'KeyP':
            if (_$.paused) _$.resume()
            else _$.pause()
            break
    }
}
