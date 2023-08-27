/// <reference types="cypress" />

describe("E2E - Verification of Login ", ()=> {
    it("Verification of Login to an existing account", ()=> {
        const validEmail = Cypress.env("validEmail");
        const validPassword = Cypress.env("validPassword");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get("#email").type(validEmail)
        cy.get("#passwd").type(validPassword)
        cy.get("#SubmitLogin").click()
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=my-account')
        cy.get('a[title="Log me out"]').click();
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    })
})