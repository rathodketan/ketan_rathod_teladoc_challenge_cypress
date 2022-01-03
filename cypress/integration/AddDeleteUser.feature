Feature: (UI) Add and Delete User from the web tables

Narrative: User should be able to add and delete users from the web table

@automated @smoke
Scenario Outline: Add a user and validate the user has been added to the table
Given user opens the application page
And user clicks on Add User option on the page
When user adds the customer "<firstname>","<lastname>","<username>","<password>","<email>","<phone>" in the webtable
And user selects customer as Company AAA
And user selects role as "Customer"
And user clicks on save button
Then customer data "<email>" should be successfully added to the table
Examples:
|firstname|lastname|username|password|email|phone|Customer|
|Michael|Clack|m.clark|Test@123|michael.clark@test.com|9999999999|Customer|

@automated
Scenario: Delete user User Name and validate user has been delete
Given user opens the application page
When user deletes "novak" from the application
Then user "novak" should be successfully deleted from the table