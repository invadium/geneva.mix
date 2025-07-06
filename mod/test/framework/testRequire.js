const leadingDependable  = require('/test/framework/leadingDependable')
const trailingDependable = require('test/framework/trailingDependable')

function testRequiresAvailability() {
    expect(leadingDependable,  'leading require' ).isNotNull()
    expect(trailingDependable, 'trailing require').isNotNull()
}

