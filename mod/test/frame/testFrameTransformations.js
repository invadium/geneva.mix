let root

function init() {
    // build a structure
    root = new sys.LabFrame({
        name: 'root',
    })

    root.attach(new sys.LabFrame({
        name: 'plain',
    }))

    root.attach(new sys.PosFrame({
        name: 'pos',
        x:     10,
        y:     20,
    }))

    root.attach(new sys.ScaleFrame({
        name:  'scale',
        x:     4,
        y:     8,
    }))

    root.attach(new sys.RotateFrame({
        name:  'rot',
        angle:  PI,
    }))

    root.attach(new sys.TransformFrame({
        name: 'transform',
        x:     20,
        y:     40,
        scale: 2,
        angle: HALF_PI,
    }))
}

function testMonoTransformationsToLocal() {
    expect(root.lx(1), 'root lx()').toBe(1)
    expect(root.ly(2), 'root ly()').toBe(2)

    expect(root.pos.lx(3), 'pos.lx(3)').toBe(-7)
    expect(root.pos.ly(4), 'pos.ly(4)').toBe(-16)

    expect(root.scale.lx(10), 'scale.lx(10)').toBe(2.5)
    expect(root.scale.ly(24), 'scale.ly(24)').toBe(3)

    expect(root.rot.lx, 'rot.lx').isNot()
    expect(root.rot.ly, 'rot.ly').isNot()

    expect(root.transform.lx, 'transform.lx').isNot()
    expect(root.transform.ly, 'transform.ly').isNot()
}

function testMonoTransformationsToUpper() {
    expect(root.ux(1), 'root ux()').toBe(1)
    expect(root.uy(2), 'root uy()').toBe(2)

    expect(root.pos.ux(3), 'pos.ux(3)').toBe(13)
    expect(root.pos.uy(4), 'pos.uy(4)').toBe(24)

    expect(root.scale.ux(2), 'scale.ux(2)').toBe(8)
    expect(root.scale.uy(3), 'scale.uy(3)').toBe(24)

    expect(root.rot.ux, 'rot.ux').isNot()
    expect(root.rot.uy, 'rot.uy').isNot()

    expect(root.transform.ux, 'transform.ux').isNot()
    expect(root.transform.uy, 'transform.uy').isNot()
}

