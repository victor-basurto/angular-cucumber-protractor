Feature: Go to the home
	Display the title

	Scenario: Home Page
		Given I am on the home page
		When I do nothing
		Then I should see the title
		Then I should see a table with a length of at least 6 items