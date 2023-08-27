/// <reference types="cypress" />

describe("Create and Delete", () => {
    it("Creating and Delete article with API", () => {
        const validEmail = Cypress.env("APIemail")
        const validPassword = Cypress.env("APIpassword")
        const token = Cypress.env("APItoken")
        const randomTitle = Math.random().toString(36).substring(2.15)
        const articleUrl = "https://api.realworld.io/api/articles/" + randomTitle +"-221182"
        const PostData = {
            "article": {
                "tagList": [],
                "title": randomTitle,
                "description": "test",
                "body": "test"
            }
        }
        //Create new article
        cy.request("POST", "https://api.realworld.io/api/users/login", { user: { email: validEmail, password: validPassword } })
        .its("body").then(res => {
            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: PostData,
                headers: {
                    'Authorization': 'Token ' + token
                } 
            }).then(res => {
                expect(res.status).to.equal(201)
            })
        })
        //Delete article
        cy.request({
            method: "DELETE",
            url: articleUrl,
            headers: {
                'Authorization': 'Token ' + token
            }
        }).then(response => {
            expect(response.status).to.equal(204)
        })

    })

})

