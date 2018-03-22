export default class Random {
	constructor(options) {
		this._currentIndex = null
	}

	getRandomItem(items) {
		return items[this._getUniqRandomIndex(items)]
	}

	_getRandomIndex(items) {
		// stat.add('randomCount')
		return Math.floor(Math.random() * items.length)
	}

	_getUniqRandomIndex(items) {
		const nextIndex = this._getRandomIndex(items)

		if (nextIndex !== this._currentIndex) {
			// stat.addVariant(nextIndex)
			this._currentIndex = nextIndex
			// stat.add('count')
			return nextIndex
		}

		// stat.add('notUniqRandom')
		return this._getUniqRandomIndex(items)
	}
}
