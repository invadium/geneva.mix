// @depends(/test/framework/leadingDependable)
// @depends(test/framework/trailingDependable)

const leadingDependable   = $.test.framework.leadingDependable,
      trailingDependable  = $.test.framework.trailingDependable

function testDependablesAvailability() {
    expect(leadingDependable,  'leading dependable' ).isNotNull()
    expect(trailingDependable, 'trailing dependable').isNotNull()
}

