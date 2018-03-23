import Interval from './interval.js'
import Timeout from './timeout.js'

const ACTIVE_CLASS_NAME = 'progress_active'
const APPROVE_TIMER_INTERVAL_TIMEOUT = 10000
const APPROVE_TIMER_DEFERRED_START_TIMEOUT = 3000

const noop = () => {}

export default class ApproveTimer {
	constructor(options) {
		this._element = options.element
		this._onDone = options.onDone || noop

		this._interval = null
		this._timeout = null

		this._initialize()
	}

	_initialize() {
		this._interval = new Interval({
			onStart: () => this._start(),
			onTick: (progress) => this._next(progress),
			onDone: () => this._done(),
			timeout: APPROVE_TIMER_INTERVAL_TIMEOUT,
		})
		this._timeout = new Timeout({
			onDone: () => this._interval.start(),
			timeout: APPROVE_TIMER_DEFERRED_START_TIMEOUT,
		})
	}

	start() {
		this._reset()
		this._timeout.start()
	}

	_reset() {
		this._element.classList.remove(ACTIVE_CLASS_NAME)
		this._interval.stop()
		this._timeout.stop()
	}

	_start() {
		this._element.classList.add(ACTIVE_CLASS_NAME)
	}

	stop() {
		this._reset()
	}

	_done() {
		this._reset()
		this._onDone()
	}

	_next(progress) {
		this._element.value = this._getReversedProgress(progress)
	}

	_getReversedProgress(progress) {
		return 100 - (progress * 100)
	}
}
