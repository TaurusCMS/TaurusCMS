'use strict';

class Base {

	constructor() {
		if (new.target === Base) {
			throw new TypeError('Abstract class "Base" cannot be instantiated directly.');
		}
	}
}