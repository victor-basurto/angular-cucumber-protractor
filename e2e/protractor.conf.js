// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
	allScriptsTimeout: 11000,
	specs: [
		'./src/features/**/*.feature'
	],
	capabilities: {
		'browserName': 'chrome'
	},
	directConnect: true,
	baseUrl: 'http://localhost:4200/',
	framework: 'custom',	// set to custom instead of cucumber
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		monochrome: true,
		strict: true,	// <boolean> fail if there are any undefined or pending steps
		dryRun: false,	// <boolean> invoke formatters without executing steps
		require: ['./src/steps/**/*.steps.ts'],
		tags: [],		// <string[]> (expression) only execute the features or scenarios with tags matching the expression
		format: []	// format results e.g. ['json']
	},
	onPrepare() {
		browser.manage().window().maximize();	// maximize the browser
		require('ts-node').register({
			project: 'e2e/tsconfig.e2e.json'
		});
	}
};