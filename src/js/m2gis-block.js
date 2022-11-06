export default class M2GisBlock {
	constructor(el, options = {}) {

	}

	_templates = {
		iframe(src) {
			return `<iframe
				class="m2gisblock-iframe"
				frameborder="no"
				style="box-sizing: border-box;"
				src="src"
			></iframe>`
		},
		
	}
}
