/// <reference types="cypress" />

describe("E2E - Verification of Store information Footer", ()=> {
    it("Verification of Address of Company on Store information", ()=> {
        cy.visit("/")
        //Checking if the element exist on the page
        cy.get("#block_contact_infos").should("exist")
        //Checking if the element contain Text
        cy.get("#block_contact_infos").should("contain", "Store Information")
        //Checking if the icon exist on page
        cy.get(".icon-map-marker").should("exist")
        //Checking if the icon is visible on page
        cy.get(".icon-map-marker").should("be.visible")
        //Checking if the icon offsetHeight,offsetWidth
        cy.get(".icon-map-marker").should(icon => {
            expect(icon[0].offsetWidth).to.be.greaterThan(0);
            expect(icon[0].offsetHeight).to.be.greaterThan(0);
            expect(icon[0].offsetWidth).to.be.below(50); 
            expect(icon[0].offsetHeight).to.be.below(50);
        })
        //Verifying that it contains a valid  address
        cy.get("#block_contact_infos")
        .should("contain", "My Company, 42 avenue des Champs Elysées")
        .and("contain", "75000 Paris")
        .and("contain", "France");
    })
})