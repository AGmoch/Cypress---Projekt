/// <reference types="cypress" />


describe("E2E - Verification of Newsletter", ()=> {
    it.only("Verification of valid email in newsletter", ()=> {
        //Generate random valid email
        const randomEmail = Math.random().toString(36).substring(2.15)+"@gmail.com"
        cy.visit("/")
        //Checking if the element exist on the page
        cy.get("#newsletter-input").should("exist") //input field
        cy.get('[Name="submitNewsletter"]').should("exist") //submit button
        //Verification of valid email
        cy.get("#newsletter-input").type(randomEmail)
        cy.get('[Name="submitNewsletter"]').click()
        cy.get("p").should("contain", " Newsletter : You have successfully subscribed to this newsletter.")
    })
})
