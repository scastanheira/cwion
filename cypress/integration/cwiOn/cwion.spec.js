/// <reference types="cypress" />

const home = require('../../pageOptions/home.page');
const login = require('../../pageOptions/login.page');
const welcome = require('../../pageOptions/welcome.page');
const category = require('../../pageOptions/category.page');
const product = require('../../pageOptions/product.page');

describe('ProcessoCompra', () => {
    beforeEach(() =>{
        cy.visit('/')
    })

    it('Acessar a pagina de login', () => {
        home.clickMenu('Sign in');
    })

    it('Realizar login', () => {
        home.clickMenu('Sign in');

        login.setLogin('novoemailteste@gmail.com', 'teste123');
        login.submit();
        login.breadcrumb.should('have.html', 'My account');
    })

    it('Acessar a categoria T-SHIRTS', () => {
        home.clickMenu('Sign in');
        login.setLogin('novoemailteste@gmail.com', 'teste123');
        login.submit();

        welcome.submit('T-shirts');
        category.name.contains('T-shirts');
    })

    it('Acessar o primeiro produto da categoria', () => {
        home.clickMenu('Sign in');
        login.setLogin('novoemailteste@gmail.com', 'teste123');
        login.submit();
        
        welcome.submit('T-shirts');

        category.product.invoke('text').then(($value) => {
            cy.intercept('**/index.php?id_product=1&controller=product').as('productRoute')

            category.link.click()
            console.log(product.name.invoke('text'));

            cy.wait('@productRoute').its('response.statusCode').should('be.oneOf', [200, 304]).then((xhr) => {
                console.log($value)
                product.name.eq(0).should('contain', $value.trim())
            })
        })
    })

    it('Realizar processo de checkout', () => {
        home.clickMenu('Sign in');
        login.setLogin('novoemailteste@gmail.com', 'teste123');
        login.submit();
        
        welcome.submit('T-shirts');

        category.product.invoke('text').then(($value) => {
            cy.intercept('**/index.php?id_product=1&controller=product').as('productRoute')

            category.link.click()
            console.log(product.name.invoke('text'));

            cy.wait('@productRoute').its('response.statusCode').should('be.oneOf', [200, 304]).then((xhr) => {
                console.log($value)
                product.name.eq(0).should('contain', $value.trim())
            })
        })

        product.addCart.click().wait(10000);
        product.checkout.click({force:true});
        product.confirmCheckout.click({force:true});
        product.confirmAddress.click();
        product.acceptTerms.invoke('attr', 'checked', 'checked')
        product.confirmTerms.click();
        product.choosePayment.click({force:true});
        product.confirmPayment.click();
        product.successMessage.eq(0).should('contain', 'Your order on My Store is complete.')
    
    });
})
