/// <reference types="cypress" />

describe("E2E - Validation of Create new user process", ()=> {
    it("Verification of Create an account with empty email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(" ")
        cy.get("i").parents(".submit button").contains("Create an account").click()
        //checking the alert message
        cy.get("#create_account_error").should("exist").and("contain", "Invalid email address.")
    })
})

   