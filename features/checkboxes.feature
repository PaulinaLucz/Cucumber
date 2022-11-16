
@wip
Feature: Chceck boxes page
Background: 
    Given I am on the "checkboxes" page

Scenario Outline: I can check boxes

    When I clic chceck boxes checkbox 1
    Then I should see a check checkbox 1

    When I duble clic chceck boxes checkbox 2
    Then I should see a check checkbox 2    