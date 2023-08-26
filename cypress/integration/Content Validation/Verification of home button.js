/// <reference types="cypress" />

const expectedWidth = 350;
const expectedHeight = 99;
const expectedSrc = "http://www.automationpractice.pl/img/logo.jpg"

describe("E2E - Verification of home button from category Women", ()=> {
    it("Checking home button - return to home page", ()=> {
        cy.visit("/index.php?id_category=3&controller=category")
        //Checking if the element exist on the page
        cy.get("#header_logo").should("exist")
        //Checking if the element is visable on the page
        cy.get("#header_logo").should("be.visible")
        //Checking expectedWidth
        cy.get('img.logo').should('have.attr', 'width', expectedWidth)
        //Checking expectedHeight
        cy.get('img.logo').should('have.attr', 'Height', expectedHeight)
        //Checking expectedSrc
        cy.get('img.logo').should('have.attr', 'src', expectedSrc)
        //checking the home button
        cy.get("#header_logo").click()
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php')
    })

    describe("E2E - Verification of home button from category Dresses", ()=> {
        it("Checking home button - return to home page", ()=> {
            cy.visit("/index.php?id_category=8&controller=category")
            //Checking if the element exist on the page
            cy.get("#header_logo").should("exist")
            //Checking if the element is visable on the page
            cy.get("#header_logo").should("be.visible")
            //Checking expectedWidth
            cy.get('img.logo').should('have.attr', 'width', expectedWidth)
            //Checking expectedHeight
            cy.get('img.logo').should('have.attr', 'Height', expectedHeight)
            //Checking expectedSrc
            cy.get('img.logo').should('have.attr', 'src', expectedSrc)
            //checking the home button
            cy.get("#header_logo").click()
            cy.url().should('eq', 'http://www.automationpractice.pl/index.php')
        })
    })
    describe("E2E - Verification of home button from category T-shirts", ()=> {
        it("Checking home button - return to home page", ()=> {
            cy.visit("/index.php?id_category=5&controller=category")
            //Checking if the element exist on the page
            cy.get("#header_logo").should("exist")
            //Checking if the element is visable on the page
            cy.get("#header_logo").should("be.visible")
            //Checking expectedWidth
            cy.get('img.logo').should('have.attr', 'width', expectedWidth)
                //Checking expectedHeight
            cy.get('img.logo').should('have.attr', 'Height', expectedHeight)
            //Checking expectedSrc
            cy.get('img.logo').should('have.attr', 'src', expectedSrc)
            //checking the home button
            cy.get("#header_logo").click()
            cy.url().should('eq', 'http://www.automationpractice.pl/index.php')
        })
    })
})
