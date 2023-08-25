///<reference types="cypress" />

describe("E2E - Weryfikacja tagów API", () =>{
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
    it("Testy API", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTags");
        cy.visit("https://angular.realworld.io/")
        cy.wait("@requestTags")  //@ przed aliasem
        cy.get("@requestTags").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).contain("welcome").and.to.contain("implementations")
        })
    })

    it("niepoprawne logowanie", function() {
        //cy.visit("https://angular.realworld.io/")
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.Login("test1234@gmail.com", "123123asd");
        cy.wait("@requestLogin")
        
        cy.get("@requestLogin").then(res=>{
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            // cy.fixture("example").then(data => {
            //     expect(res.response.statusMessage).to.equal(data.statusMessage403)

            // }) ///fixtures!
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)

            
            })
        
        })
    //mockowanie
    it("Poprawne Logowanie", function(){
        cy.intercept("GET", "https://api.realworld.io/api/tags", {  fixture:'tags.json'}).as("requestTags");
        cy.Login("artur.gmoch@gmail.com", "123password")
        cy.wait("@requestTags")
        cy.get("@requestTags").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).contain("cats").and.to.contain("animals")
        })
    })
    
})