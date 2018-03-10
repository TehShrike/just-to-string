const toString = Object.prototype.toString

module.exports = function(value) {
	const safe = value !== null && value !== undefined

	if (safe && typeof value.toString === 'function') {
		return value.toString()
	} else {
		return toString.apply(value)
	}
}
