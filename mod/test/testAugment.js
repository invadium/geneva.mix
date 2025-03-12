function testAugment() {
    const target = {
        a: 101,
        b: 102,
        e: {
            f: 201,
            g: 202,
        },
    }

    const source = {
        a: 11,
        b: 21,
        c: 31,
        e: {
            g: 302,
            h: 303,
        },
        i: {
            h: 401,
            m: 402,
        },
        onAugment: function() {
            this.d = 41
        },
    }

    augment(target, source)

    assert(target.a === 11)
    assert(target.b === 21)
    assert(target.c === 31)
    assert(target.d === 41, 'onAugment() failed')
    assert(target.e.f === 201)
    assert(target.e.g === 302)
    assert(target.e.h === 303)
    assert(target.i.h === 401)
    assert(target.i.m === 402)
}
