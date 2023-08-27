
describe("E2E - Validation of Create new user process", ()=> {
    it("Verification of day,months,years in data fields", ()=> {
        //Generate random valid email
        const randomEmail = Math.random().toString(36).substring(2.15)+"@gmail.com"
        const validPassword = Cypress.env("validPassword");
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get(".form-group #email_create").type(randomEmail)
        cy.get("i").parents(".submit button").contains("Create an account").click()
        
        //checkbox
        cy.get("#newsletter").should("not.be.checked")
        cy.get("#newsletter").check().should("be.checked")
        cy.get("#newsletter").uncheck().should("not.be.checked")
        cy.get("#newsletter").check().should("be.checked")
    })
})