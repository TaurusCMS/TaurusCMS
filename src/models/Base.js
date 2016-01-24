'use strict';

class Base {
	constructor() {
		if (new.target === Base) {
			throw new TypeError("Cannot construct Base instances directly");
		}
	}
}