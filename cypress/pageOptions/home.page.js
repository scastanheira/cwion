/// <reference types="cypress" />

class HomePage {
    get menu() { return cy.get('div.header_user_info a') }

    clickMenu(item) {
        this.menu.contains(item).click();
    }
}

module.exports = new HomePage();