import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	getTitleText() {
		return element(by.css('app-root h1')).getText() as Promise<any>;
	}

	getTable() {
		return element(by.css('app-root .table-data')).isElementPresent(by.css('table')) as Promise<any>;
	}
}