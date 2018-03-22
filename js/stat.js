const STORAGE_FILL_NAME = 'choice-roulete-stat'

export default class Stat {
	constructor() {
		this._stat = null

		this._initialize()
	}

	_initialize() {
		this._stat = this._load()
	}

	_load() {
		const savedStat = localStorage.getItem(STORAGE_FILL_NAME)

		if (savedStat) {
			return JSON.parse(savedStat)
		}

		return {
			count: 0,
			randomCount: 0,
			notUniqRandom: 0,
			variants: {},
		}
	}

	_save() {
		localStorage.setItem(STORAGE_FILL_NAME, JSON.stringify(this._stat))
	}

	add(name) {
		this._save()

		if (this._stat[name] === undefined) {
			this._stat[name] = 0
		}

		this._stat[name] += 1
	}

	addVariant(index) {
		this._save()

		if (this._stat.variants[index] === undefined) {
			this._stat.variants[index] = 0
		}

		this._stat.variants[index] += 1
	}

	log() {
		console.log(this._stat)
	}
}
