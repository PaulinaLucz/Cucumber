@wip
Feature: Chceck key presses page

  Scenario Outline: I can check key presses

    Given I am on the "key_presses" page
    When I chceck some <elements>
    Then I should see a "<names>" 

    Examples:
     | elements | names              |
     | A        | You entered: A     |
     | B        | You entered: B     | 
     | F5       | You entered: F5    |
     |Enter     | You entered: ENTER | 



