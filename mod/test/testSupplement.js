function testSupplement() {
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
        onSupplement: function() {
            this.d = 41
        },
    }

    supplement(target, source)
    console.dir(target)
    assert(target.a === 101)
    assert(target.b === 102)
    assert(target.c === 31)
    assert(target.d === 41)
    assert(target.e.f === 201)
    assert(target.e.g === 202)
    assert(target.e.h === 303)
    assert(target.i.h === 401)
    assert(target.i.m === 402)
}
