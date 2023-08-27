/// <reference types="cypress" />

describe("Data Field Validation", () => {

  it("Verification of day,months,years in data fields", ()=> {
      //Generate random valid email
      const randomEmail = Math.random().toString(36).substring(2.15)+"@gmail.com"
      const validPassword = Cypress.env("validPassword");
      cy.visit("/index.php?controller=authentication&back=my-account")
      cy.get(".form-group #email_create").type(randomEmail)
      cy.get("i").parents(".submit button").contains("Create an account").click()
      
        //verification of day 1 to day 31
        for (let day = 1; day <= 31; day++) {
          cy.get("#days").select(day.toString(), { force: true }).should("have.value", day.toString());
        }
        //verification of month 1 to month 12
        for (let months = 1; months <= 12; months++) {
          cy.get("#months").select(months.toString(), { force: true }).should("have.value", months.toString());
        }
        //verification of year 1950 to years 2023
        for (let years = 1950; years <= 2023; years++) {
          cy.get("#years").select(years.toString(), { force: true }).should("have.value", years.toString());
        }
    })  
})
