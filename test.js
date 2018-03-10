const test = require('tape')
const toString = require('./')

const cases = [
	[ null, '[object Null]' ],
	[ 3, '3' ],
	[ NaN, 'NaN' ],
	[ undefined, '[object Undefined]' ],
	[ Object.create(null), '[object Object]' ],
]

test('just-to-string', t => {
	cases.forEach(([ input, expectedOutput ]) => {
		const output = toString(input)

		t.equal(output, expectedOutput)
	})

	t.end()
})
