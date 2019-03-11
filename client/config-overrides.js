const path = require('path');

module.exports = function override(config, env) {
	config.resolve = {
		...config.resolve,
		alias: {
			Components: path.resolve(__dirname, 'src/components/'),
		}
	};
	return config;
};