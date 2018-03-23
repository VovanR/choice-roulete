const noop = () => {};

const PERIOD = 25; // In ms

export default class Timeout {
	constructor(options) {
		this._onStart = options.onStart || noop;
		this._onTick = options.onTick || noop;
		this._onDone = options.onDone || noop;
		this._onStop = options.onStop || noop;
		this._timeout = options.timeout;

		this._oneTickPercent = 1 / (this._timeout / PERIOD);

		this._interval = null;
		this._progress = null;
	}

	start() {
		this._reset();
		this._progress = 0;

		this._interval = setInterval(() => {
			this._tick();
		}, PERIOD);

		this._onStart();
	}

	_tick() {
		this._progress += this._oneTickPercent;
		this._onTick(this._progress);

		if (this._progress >= 1) {
			this._done();
		}
	}

	stop() {
		this._reset();
		this._onStop();
	}

	_done() {
		this._reset();
		this._onDone();
	}

	_reset() {
		clearInterval(this._interval);
		this._interval = null;
		this._progress = null;
	}
}
