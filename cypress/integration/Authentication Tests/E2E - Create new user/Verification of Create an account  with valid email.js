/// <reference types="cypress" />

describe("E2E - Validation of Create new user process", ()=> {
    it("Verification of Create an account  with valid email", ()=> {
        //Generate random valid email
        const randomEmail = Math.random().toString(36).substring(2.15)+"@gmail.com"
        const validPassword = Cypress.env("validPassword");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(randomEmail)
        cy.get("i").parents(".submit button").contains("Create an account").click()
        //Verification of url
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Entering required registration data
        cy.get("#uniform-id_gender1").click()
        cy.get("#customer_firstname").type("Artur")
        cy.get("#customer_lastname").type("Gmoch")
        cy.get("#email").clear().type(randomEmail)
        cy.get("#passwd").type(validPassword)
        cy.get("#days").select("31").should("have.value", "31");
        cy.get("#months").select("December").should("have.value", "12");
        cy.get("#years").select("2010").should("have.value", "2010");
        cy.get("#newsletter").check()
        cy.get("#submitAccount").click()
        cy.get("p").should("exist").and("contain", "Your account has been created.")
    })
})
