/// <reference types="cypress" />

describe("Creating New comments  API Test", () => {
    it("Create new comment in article APITest with API", () => {
        const validEmail = Cypress.env("APIemail")
        const validPassword = Cypress.env("APIpassword")
        const token = Cypress.env("APItoken")
        const randomComment = Math.random().toString(36).substring(2.15)
        const PostData = {
            "comment": {
                "body": randomComment,
            }
        }
        //Create comment
        cy.request("POST", "https://api.realworld.io/api/users/login", { user: { email: validEmail, password: validPassword } })
        .its("body").then(res => {
            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/APITest-221182/comments",
                body: PostData,
                headers: {
                    'Authorization': 'Token ' + token
                } 
            }).then(res => {
                expect(res.status).to.equal(200)
            })
        })
    })

})

