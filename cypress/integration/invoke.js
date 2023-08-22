///<reference types="cypress" />

//metoda invoke pozwala pobrać konkretne właściwości

describe("E2E - Metoda Invoke", () =>{
    it("Invoke", () => {
        cy.visit("/")
        cy.get('[title="Contact us"]').invoke("text").then(tekst => {
            cy.log(tekst)
        })

        //pobieranie wartości atrybutu  href
        cy.get('[title="Contact us"]').invoke("attr", "href").then(link =>{
            cy.log(link)
        })
        //pobieranie wartości atrybutu  title
        cy.get('[title="Contact us"]').invoke("attr", "title").then(title =>{
            cy.log(title)
        })

        //pobieranie wartości  (właściwości jakiegoś pola w devtools zakładka properties -> value:)
        cy.get("#search_query_top").type("Przykładowy produkt").invoke("prop", "value").then (wartosc =>{
            cy.log(wartosc)
        })
    })
    
})