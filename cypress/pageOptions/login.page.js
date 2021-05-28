/// <reference types="cypress" />

class LoginPage {
    get inputEmail() { return cy.get('input#email') }
    get inputPasswd() { return cy.get('input#passwd') }
    get buttonSubmit() { return cy.get('button#SubmitLogin') }
    get breadcrumb() { return cy.get('div.breadcrumb > span.navigation_page') }
    

    setLogin(email, passwd) {
        this.inputEmail.invoke('attr', 'value', email)
        this.inputPasswd.invoke('attr', 'value', passwd)
    }

    submit() {
        this.buttonSubmit.click();
    }
}

module.exports = new LoginPage();