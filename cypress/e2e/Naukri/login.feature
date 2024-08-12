Feature: NaukriLogin
  Scenario: Login test
    Given I open Naukri website
    When I enter login and password to inputs
    Then I should see correct URL