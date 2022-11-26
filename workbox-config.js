module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};