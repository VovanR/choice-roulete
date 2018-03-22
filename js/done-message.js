import Timeout from './timeout.js'

const ACTIVE_CLASS_NAME = 'done-message_active'

export default class DoneMessage {
	constructor(options) {
		this._element = options.element

		this._timer = null

		this._initialize()
	}

	_initialize() {
		this._timer = new Timeout({
			onDone: () => this._hide(),
			timeout: 1000,
		})
	}

	show() {
		this._timer.start()
		this._show()
	}

	_show() {
		this._element.classList.add(ACTIVE_CLASS_NAME)
	}

	hide() {
		this._timer.stop()
		this._hide()
	}

	_hide() {
		this._element.classList.remove(ACTIVE_CLASS_NAME)
	}
}
