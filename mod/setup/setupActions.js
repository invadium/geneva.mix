function setupActions() {
    extend( env._keyAction, {
        space:      'play',
        arrowLeft:  'next',
        arrowRight: 'prev',
        keyP:       'pause',
    })
}
setupActions.Z = 5
