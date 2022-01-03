import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { WebTablePage } from '../../pages/webtable_page';

const webtablePage = new WebTablePage();

beforeEach(function() {
    cy.fixture('testData.json').then((testData) => {
        this.testData = testData;
    })
})

Given('user opens the application page',function() {
    webtablePage.openUrl(this.testData.baseUrl);
})

Given('user clicks on Add User option on the page', function() {
    webtablePage.clickAddUserOption();
})

When('user adds the customer {string},{string},{string},{string},{string},{string} in the webtable',function(firstname,lastname,username,password,email,phone){
    webtablePage.addCustomerDetails(firstname,lastname,username,password,email,phone);
})

When('user selects customer as Company AAA', function(){
    webtablePage.clickCustomerRadioOption();
})

When('user selects role as {string}', function(role){
    webtablePage.selectRoleDropdown(role);
})

When('user clicks on save button', function(){
    webtablePage.clickSaveAddUser();
})

Then('customer data {string} should be successfully added to the table', function(email){
    webtablePage.verifyUserAdded(email);
})

When('user deletes {string} from the application', function(username){
    webtablePage.deleteUserbyUsername(username);
})

Then('user {string} should be successfully deleted from the table', function(username){
    webtablePage.verifyUserDeleted(username);
})

