/// <reference types="cypress" />

describe("E2E - Verification of Create an account", ()=> {
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

    it("Verification of Create an account with invalid email", ()=> {
        const invalidEmail = Cypress.env("invalidEmail");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(invalidEmail)
        cy.get("i").parents(".submit button").contains("Create an account").click()
        //checking the alert message
        cy.get("#create_account_error").should("exist").and("contain", "Invalid email address.")
    })

    it("Verification of Create an account with empty email", ()=> {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(" ")
        cy.get("i").parents(".submit button").contains("Create an account").click()
        //checking the alert message
        cy.get("#create_account_error").should("exist").and("contain", "Invalid email address.")
    })

    it("Verification of Create an account  with valid email", ()=> {
        const validEmail = Cypress.env("validEmail");
        const validPassword = Cypress.env("validPassword");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(validEmail)
        cy.get("i").parents(".submit button").contains("Create an account").click()
        //Verification of url
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Entering required registration data
        cy.get("#uniform-id_gender1").click()
        cy.get("#customer_firstname").type("Artur")
        cy.get("#customer_lastname").type("Gmoch")
        cy.get("#email").clear().type(validEmail)
        cy.get("#passwd").type(validPassword)
        cy.get("#days").select("31").should("have.value", "31");
        cy.get("#months").select("December").should("have.value", "12");
        cy.get("#years").select("2010").should("have.value", "2010");
        cy.get("#newsletter").check()
        cy.get("#submitAccount").click()
        cy.get("#alert alert-success").should("exist").and("contain", "Your account has been created.")
    })

    it("Verification of Create an account  with valid but taken email", ()=> {
        const validEmail = Cypress.env("validEmail");
        const validPassword = Cypress.env("validPassword");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(validEmail)
        cy.get("i").parents(".submit button").contains("Create an account").click()
        cy.get("#create_account_error").should("exist").and("contain", "An account using this email address has already been registered. Please enter a valid password or request a new one. ")
    })
})