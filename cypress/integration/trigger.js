///<reference types="cypress" />

describe("E2E - Skrolowanie/Najechanie", () =>{
    it("Najechanie na dany element", () => {
        cy.visit("/")
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('a[title="Summer Dresses"]').eq(1).click();
    })

    it("skrolowanie do boxa specials", ()=> {
        cy.get('a[title="Specials"]').first().scrollIntoView();
    })
    
})