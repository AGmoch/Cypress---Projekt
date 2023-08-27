/// <reference types="cypress" />

describe("E2E - Verification of Store information Footer", ()=> {
    it("Verification of phone number and icon on Store information", ()=> {
        cy.visit("/")
        //Checking if the element exist on the page
        cy.get("#block_contact_infos").contains("Call us now:").should("exist")
        //Checking if the icon exist on page
        cy.get("#block_contact_infos .icon-phone").should("exist")
        //Checking if the icon is visible on page
        cy.get("#block_contact_infos .icon-phone").should("be.visible")
        //Checking if the icon offsetHeight,offsetWidth
        cy.get("#block_contact_infos .icon-phone").should(icon => {
            expect(icon[0].offsetWidth).to.be.greaterThan(0);
            expect(icon[0].offsetHeight).to.be.greaterThan(0);
            expect(icon[0].offsetWidth).to.be.below(50); 
            expect(icon[0].offsetHeight).to.be.below(50);
        })
        //Verifying that it contains a valid phone number
        cy.get("#block_contact_infos").contains("Call us now:").should("contain", "0123-456-789")
    })
})