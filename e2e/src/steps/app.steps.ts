import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

const page: AppPage = new AppPage();

Given(/^I am on the home page$/, async () => {
	await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
	expect(await page.getTitleText()).to.equal('Welcome to cucumber-app!');
});
Then(/^I should see a table$/, async () => {
	expect(await page.getTable()).to.be.true
});

/**
 * TODO:
 * 	Install dependencies like
 * 		`chai-like`,
 * 		`chai-things`
 * 	Test for table element array 
 * 	Test for button when click = value + 1
 */