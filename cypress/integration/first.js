<reference types="cypress" />
import React from 'react';

describe("E2E - Home Page", () => {
    it("Should open home page - http://www.automationpractice.pl/", () => {
        cy.visit("/")
    })
}) 