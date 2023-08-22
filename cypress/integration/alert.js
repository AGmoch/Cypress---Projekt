/// <reference types="cypress" />

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        cy.get("#alert").click();
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal("Przykładowa treść alertu")
        })
    })

    it("Alert confirm", () => {
        cy.get("#alert-confirm").click();
        cy.on("window:confirm", tresc => {
            expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        })
        
        cy.on("window:confirm", () => false)
    })
})