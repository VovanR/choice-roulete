const STORAGE_SETTINGS_NAME = 'choice-roulete-settings';
const KEY_CODE = {
	ENTER: 13
};

export default class Settings {
	constructor(options) {
		this._items = options.items;
		this._onAddItem = options.onAddItem;

		this._element = null;
		this._inputElement = null;
		this._listElement = null;

		this._initialize();
	}

	_initialize() {
		this._element = document.getElementById('settings');
		this._inputElement = this._element.querySelector('.js-settings__input');
		this._listElement = this._element.querySelector('.js-settings__list');

		this._buildList();
		this._bindControls();
	}

	_bindControls() {
		this._element.addEventListener('click', e => {
			e.stopPropagation();
		});
		this._inputElement.addEventListener('keyup', e => {
			if (e.keyCode === KEY_CODE.ENTER) {
				this._addItem(e.target.value);
				this._onAddItem(e.target.value);
				e.target.value = '';
			}
		});
	}

	_buildList() {
		this._items.forEach(item => {
			this._addItem(item.name);
		});
	}

	_addItem(name) {
		const element = this._buildItem(name);
		this._listElement.appendChild(element);
	}

	_buildItem(name) {
		const element = document.createElement('li');
		element.textContent = name;
		return element;
	}

	_save() {
		// localStorage.setItem(STORAGE_SETTINGS_NAM, )
	}

	_load() {
	}
}
