///<reference types="cypress" />

describe("E2E - Akcja wpisywanie", () =>{
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/")
        cy.get("#search_query_top").type("Przykładowy produkt{backspace}", {delay: 500}) //1000 ms - 1s                  
        //        cy.get("#search_query_top").type("Przykładowy produktt{enter}")   

    })

    it("Czyszczenie wartości z pola input", () => {
        cy.get("#search_query_top").clear()
    })
    
})