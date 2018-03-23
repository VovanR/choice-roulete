export default class Random {
	constructor() {
		this._currentIndex = null;
	}

	getRandomItem(items) {
		return items[this._getUniqRandomIndex(items)];
	}

	_getRandomIndex(items) {
		// Stat.add('randomCount')
		return Math.floor(Math.random() * items.length);
	}

	_getUniqRandomIndex(items) {
		const nextIndex = this._getRandomIndex(items);

		if (nextIndex !== this._currentIndex) {
			// Stat.addVariant(nextIndex)
			this._currentIndex = nextIndex;
			// Stat.add('count')
			return nextIndex;
		}

		// Stat.add('notUniqRandom')
		return this._getUniqRandomIndex(items);
	}
}
