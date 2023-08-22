///<reference types="cypress" />

describe("E2E - Akcje kliknięcia", () =>{
    it("kliknięcie na element", () => {
        cy.visit("/")
        cy.contains('[title="Contact us"]','Contact us').click();
        cy.get('[title="Return to Home"]').click();
    })
    
})