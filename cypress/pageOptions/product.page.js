/// <reference types="cypress" />

class ProductPage {
    get name() { return cy.get('div > h1') }
    get addCart() { return cy.get('#add_to_cart button')}
    get checkout() { return cy.get('.layer_cart_cart .button-container > a.button span') }
    get confirmCheckout() { return cy.get('.cart_navigation .standard-checkout span') }
    get confirmAddress() { return cy.get('.cart_navigation button[name="processAddress"]') }
    get acceptTerms() { return cy.get('.order_carrier_content p.checkbox #cgv') }
    get confirmTerms() { return cy.get('.cart_navigation button[name="processCarrier"]') }
    get choosePayment() { return cy.get('#HOOK_PAYMENT .payment_module a.bankwire span') }
    get confirmPayment() { return cy.get('.cart_navigation button[type="submit"]') }
    get successMessage() { return cy.get('div.box p.cheque-indent strong.dark') }
}

module.exports = new ProductPage();