/// <reference types="cypress" />

class CategoryPage {
    get name() { return cy.get('div#center_column h1 span.cat-name') }
    get product() { return cy.get('.right-block > h5 > .product-name') }
    get link() { return cy.get('ul.product_list li:first a.lnk_view') }

    submitProduct() {
        this.link.click()
    }
}

module.exports = new CategoryPage();