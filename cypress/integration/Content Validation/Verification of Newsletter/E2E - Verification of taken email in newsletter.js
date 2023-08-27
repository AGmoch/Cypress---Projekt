/// <reference types="cypress" />


describe("E2E - Verification of Newsletter", ()=> {
    it("Verification of taken email in newsletter", ()=> {
        const validEmail = Cypress.env("validEmail");
        cy.visit("/")
        //Checking if the element exist on the page
        cy.get("#newsletter-input").should("exist") //input field
        cy.get('[Name="submitNewsletter"]').should("exist") //submit button
        //Verification of taken email
        cy.get("#newsletter-input").type(validEmail)
        cy.get('[Name="submitNewsletter"]').click()
        cy.get("p").should("contain", " Newsletter : This email address is already registered.")
    })
})
