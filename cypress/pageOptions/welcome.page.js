/// <reference types="cypress" />

class WelcomePage {
    get menu() { return cy.get('div#block_top_menu > ul.menu-content > li') }

    submit(category) {
        this.menu.contains(category).click({force:true});
    }
}

module.exports = new WelcomePage();