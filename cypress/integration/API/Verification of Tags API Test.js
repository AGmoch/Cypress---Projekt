///<reference types="cypress" />

describe("Verification of Tags API Test", () =>{
    it("Validation of Tags with API Test on home site", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTags");
        cy.visit("https://angular.realworld.io/")
        cy.wait("@requestTags")  
        cy.get("@requestTags").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)

            const expectedTags = ["welcome", "implementations", "introduction", "codebaseShow", "ipsum", "qui", "cupiditate", "et", "quia", "deserunt"];
            
            expectedTags.forEach(tag => {
                expect(res.response.body.tags).to.contain(tag)
            })
        })
    })

    
})