const noop = () => {}

export default class Timeout {
	constructor(options) {
		this._onStart = options.onStart || noop
		this._onDone = options.onDone || noop
		this._timeout = options.timeout

		this._timer = null
	}

	start() {
		this._reset()

		this._timer = setTimeout(() => {
			this._done()
		}, this._timeout)

		this._onStart()
	}

	stop() {
		this._reset()
	}

	_done() {
		this._reset()
		this._onDone()
	}

	_reset() {
		clearTimeout(this._timer)
		this._timer = null
	}
}
