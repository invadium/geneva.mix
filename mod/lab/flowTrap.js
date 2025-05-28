function keyDown(e) {
    if (e.repeat) return

    switch(e.action) {
        case 'play':
            lab.boxControl.nextBox()
            lab.boxControl.paused = false
            break

        case 'prev':
            lab.boxControl.nextBox()
            lab.boxControl.paused = true
            break

        case 'next':
            lab.boxControl.prevBox()
            lab.boxControl.paused = true
            break

        case 'pause':
            if (_$.paused) _$.resume()
            else _$.pause()
            break
    }
}
