function keyDown(e) {

    switch(e.code) {
        case 'Space':
        case 'ArrowRight':
            lab.boxControl.nextBox()
            break

        case 'ArrowLeft':
            lab.boxControl.prevBox()
            break
    }
}
