let root

function init() {
    // build a structure
    root = new sys.LabFrame({
        name: 'root',
    })

    root.attach(new sys.LabFrame({
        name: 'plain',
    }))

    const pos = root.attach(new sys.PosFrame({
        name: 'pos',
        x:     10,
        y:     20,
    }))

    pos.attach(new sys.PosFrame({
        name: 'subpos',
        x:     5,
        y:     4,
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
    expect(root.lx(1), 'root.lx()').toBe(1)
    expect(root.ly(2), 'root.ly()').toBe(2)

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
    expect(root.ux(1), 'root.ux()').toBe(1)
    expect(root.uy(2), 'root.uy()').toBe(2)

    expect(root.pos.ux(3), 'pos.ux(3)').toBe(13)
    expect(root.pos.uy(4), 'pos.uy(4)').toBe(24)

    expect(root.scale.ux(2), 'scale.ux(2)').toBe(8)
    expect(root.scale.uy(3), 'scale.uy(3)').toBe(24)

    expect(root.rot.ux, 'rot.ux').isNot()
    expect(root.rot.uy, 'rot.uy').isNot()

    expect(root.transform.ux, 'transform.ux').isNot()
    expect(root.transform.uy, 'transform.uy').isNot()
}

function testVec2TransformationsToLocal() {
    expect(root.lpos([1, 2]), 'root.lpos([1, 2])').isAnyArray().elementsMatch([1, 2])
    expect(root.pos.lpos([14, 25]), 'pos.lpos([14, 25])').isAnyArray().elementsMatch([4, 5])
    expect(root.scale.lpos([24, 56]), 'scale.lpos([24, 56])').isAnyArray().elementsMatch([6, 7])
    expect(root.rot.lpos([4, 5]), 'rot.lpos([4, 5])').isAnyArray().elementsNearlyMatch([-4, -5])
    expect(root.transform.lpos([28, 46]), 'transform.lpos([28, 46])').isAnyArray().elementsNearlyMatch([3, -4])
}

function testVec2TransformationsToUpper() {
    expect(root.upos([2, 3]), 'root.upos([2, 3])').isAnyArray().elementsMatch([2, 3])
    expect(root.pos.upos([4, 5]), 'pos.lpos([4, 5])').isAnyArray().elementsMatch([14, 25])
    expect(root.scale.upos([6, 7]), 'scale.upos([6, 7])').isAnyArray().elementsMatch([24, 56])
    expect(root.rot.upos([-4, -5]), 'rot.upos([-4, -5])').isAnyArray().elementsNearlyMatch([4, 5])
    expect(root.transform.upos([3, -4]), 'transform.upos([3, -4])').isAnyArray().elementsNearlyMatch([28, 46])
}

function testPosToLocalBasis() {
    expect(root.pos.subpos.posToLocalBasis([0, 0], root)).isAnyArray().elementsMatch([-15, -24])
    expect(root.pos.subpos.posToLocalBasis([15, 24], root)).isAnyArray().elementsMatch([0, 0])
    expect(root.pos.subpos.posToLocalBasis([25, 30], root)).isAnyArray().elementsMatch([10, 6])

    expect(root.posToLocalBasis([0, 0], root.pos.subpos)).isAnyArray().elementsMatch([15, 24])
    expect(root.posToLocalBasis([2, 4], root.pos.subpos)).isAnyArray().elementsMatch([17, 28])
    expect(root.posToLocalBasis([-3, -5], root.pos.subpos)).isAnyArray().elementsMatch([12, 19])
}
