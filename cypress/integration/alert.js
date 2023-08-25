/// <reference types="cypress" />

import AlertPage from "../support/page-object/alertPage";

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        AlertPage.clickOnBtnAlert1();
        AlertPage.verifyAlertText("Przykładowa treść alertu");
    })

    it("Alert confirm", () => {
        AlertPage.clickOnBtnAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.acceptAlert();
    })
})