<reference types="cypress" />
import React from 'react';

describe("E2E - Lesson", () => {
    it("Lokalizatory", () => {
        cy.visit("/")

        //Po znacznikach
        cy.get("a");

        //Po identyfikatorach  "#id" 
        cy.get("#search_block_top")

        //op klasie  ".klasa"
        cy.get(".shopping_cart")

        //atrybuty 
        cy.get('[name="search_query"]')

        //dokladniejszy atrybut
        cy.get('input[name="search_query"]')

        //pobieranie po kilku atrybutach
        cy.get('[src="http://www.automationpractice.pl/modules/homeslider/images/sample-3.jpg"][height="448"]')
        
    })

    it.only("Lokalizatory part 2", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]','Contact us')
    })
}) 