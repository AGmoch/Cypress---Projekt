/// <reference types="cypress" />

describe("E2E - Validation of Create new user process", ()=> {
    it("Verification of Create an account buttons exist", ()=> {
        cy.visit("/")
        //Checking if the element button "Sign in" on the page and click the button
        cy.get(".login").contains("Sign in").should("exist").click()
        //checking if the button "Create an account" exist on the page 
        cy.get(".submit button").should("exist")
        //checking if the icon button "Create an account" exist on the page 
        cy.get("i").parents(".submit button").contains("Create an account")
        //checking if input Email adress exist
        cy.get(".form-group").should("exist").and("contain", "Email address")
    })
})