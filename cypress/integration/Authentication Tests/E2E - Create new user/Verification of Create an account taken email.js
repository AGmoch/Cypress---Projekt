/// <reference types="cypress" />

describe("E2E - Validation of Create new user process", ()=> {
    it("Verification of Create an account  with valid but taken email", ()=> {
        const validEmail = Cypress.env("validEmail");
        const validPassword = Cypress.env("validPassword");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(validEmail)
        cy.get("i").parents(".submit button").contains("Create an account").click()
        cy.get("#create_account_error").should("exist").and("contain", "An account using this email address has already been registered. Please enter a valid password or request a new one. ")
    })
})
