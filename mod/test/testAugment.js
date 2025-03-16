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

    expect(target, 'augmented-object')
        .isSupersetOf({
            a: 11,
            b: 21,
            c: 31,
            d: 41,
            e: {
                g: 302,
                h: 303,
            },
            i: {
                h: 401,
                m: 402,
            },
        })
}
