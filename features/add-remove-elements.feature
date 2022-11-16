@wip
Feature: Add and remove page

Background: 
 Given I am on the "add_remove_elements/" page

@add_elements
Scenario Outline: I can add elements and remove elemnts
    When I add elemnts with clic add elemnts 
    Then I should see a field saying delete
    When I delete elemnts with clic delete 
    Then I should desapir field saying delete


