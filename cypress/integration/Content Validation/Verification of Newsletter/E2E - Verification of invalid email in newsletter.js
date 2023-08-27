/// <reference types="cypress" />

describe("E2E - Verification of Newsletter", ()=> {
    it("Verification of invalid email in newsletter", ()=> {
        const invalidEmail = Cypress.env("invalidEmail");
        cy.visit("/")
        //Checking if the element exist on the page
        cy.get("#newsletter-input").should("exist") //input field
        cy.get('[Name="submitNewsletter"]').should("exist") //submit button
        //Verification of invalid email
        cy.get("#newsletter-input").type(invalidEmail)
        cy.get('[Name="submitNewsletter"]').click()
        cy.get("p").should("contain", " Newsletter : Invalid email address.")
    })

})