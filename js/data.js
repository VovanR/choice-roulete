const STORAGE_FILL_NAME = 'choice-roulete-data';

const INIT_DATA = {
	items: [],
	_lastId: 0
}

function getInitData() {
	return JSON.parse(JSON.stringify(INIT_DATA));
}

export default class Data {
	constructor(options) {
		this._data = getInitData();
		this._initialize();
	}

	_initialize() {
		this._load();
	}

	_getNextId() {
		const nextId = this._data._lastId + 1;
		this._data._lastId = nextId;
		return nextId;
	}

	addItem(name) {
		this._data.items.push({
			id: this._getNextId(),
			name,
		});
		this._save();
	}

	getItems() {
		return this._data.items;
	}

	_load() {
		const data = JSON.parse(localStorage.getItem(STORAGE_FILL_NAME));
		if (data === null) {
			return;
		}
		this._data = data;
	}

	_save() {
		localStorage.setItem(STORAGE_FILL_NAME, JSON.stringify(this._data));
	}

	_clear() {
		this._data = getInitData();
		this._save();
	}
}
