// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			src: path.resolve(__dirname, './src'),
		};
		return config;
	},
};
