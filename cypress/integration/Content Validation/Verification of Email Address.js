/// <reference types="cypress" />

describe("E2E - Verification of Email Address", ()=> {
    it("Verification of Email Address on Store information", ()=> {
        cy.visit("/")
        //Checking if the element exist on the page
        cy.get("li").parents("ul").find("li").contains("Email:").should("exist")
        //Checking if the icon exist on page
        cy.get(".icon-envelope-alt").should("exist")
        //Checking if the icon is visible on page
        cy.get(".icon-envelope-alt").should("be.visible")
        //Checking if the icon offsetHeight,offsetWidth
        cy.get(".icon-envelope-alt").should(icon => {
            expect(icon[0].offsetWidth).to.be.greaterThan(0);
            expect(icon[0].offsetHeight).to.be.greaterThan(0);
            expect(icon[0].offsetWidth).to.be.below(50); 
            expect(icon[0].offsetHeight).to.be.below(50);
        })
        //Verifying that it contains a valid email address
        cy.get("li").parents("ul").find("li").contains("Email:").should("contain", "sales@yourcompany.com")
    })
})