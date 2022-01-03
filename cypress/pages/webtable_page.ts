export class WebTablePage{
    addUserButton = "button[class*='btn-link'][type='add']";
    firstNameField = "input[name='FirstName']";
    lastNameField = "input[name='LastName']";
    userNameField = "input[name='UserName']";
    passwordField = "input[name='Password']";
    emailField = "input[name='Email']";
    mobilephoneField = "input[name='Mobilephone']";
    customerRadioOption = "input[name*='optionsRadios']";
    roleDropdown = "select[name='RoleId']";
    saveButton = "button[class*='success']";
    emailDataWebTable = "table tbody tr td:nth-child(7)";
    usernameDataWebTable = "table tbody tr td:nth-child(3)";
    popupOkButton = "div[class='modal-footer'] button:nth-child(2)";

    openUrl(baseUrl){
        cy.visit(baseUrl);
    }

    clickAddUserOption(){
        cy.get(this.addUserButton).click();
    }

    addCustomerDetails(firstname, lastname, username, password, email, phone) {
        cy.get(this.firstNameField).type(firstname);
        cy.get(this.lastNameField).type(lastname);
        cy.get(this.userNameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.emailField).type(email);
        cy.get(this.mobilephoneField).type(phone);
    }

    clickCustomerRadioOption(){
        cy.get(this.customerRadioOption).first().check();
    }

    selectRoleDropdown(role){
        cy.get(this.roleDropdown).select(role);
    }

    clickSaveAddUser(){
        cy.get(this.saveButton).click();
    }

    verifyUserAdded(email){
        cy.get(this.emailDataWebTable).each(($el)=>{
            if($el.text()==email){
                expect($el.text()).to.equal(email);
                return false;
            }
        })
    }

    deleteUserbyUsername(username){
        cy.get('table tbody tr').each(($row)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col)=>{
                    if($col.text()==username){
                        cy.get('td').eq(10).click();                        
                    }
                })
            })
        })
        cy.get(this.popupOkButton).click();
    }

    verifyUserDeleted(username){
        cy.get(this.usernameDataWebTable).each(($el)=>{
            if($el.text()==username){
                expect($el.text()==username).to.be.false;
                return false;
            }            
        })                
    }
   
}