/// <reference types="cypress" />
describe('My First Test Suite', function () {
	it('My FirstTest case', function () {
		cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

		cy.intercept(
			'GET',
			'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
			{
				statusCode: 200,
				body: [
					{
						id: 2,
						name: 'Gran Turismo 3',
						releaseDate: '2001-03-10 23:59:59',
						reviewScore: 91,
						category: 'Driving',
						rating: 'Universal',
					},
				],
			},
		).as('bookretrievals')
		cy.get("button[class='btn btn-primary']").click()
		cy.wait('@bookretrievals').then(({ request, response }) => {
			const body = response.body
			cy.log(JSON.stringify(body))
			//cy.get('tr').should('have.length', body.length + 1)
		})
		//cy.get('p').should('have.text', 'Oops only 1 Book available')
	})

	it('My secondTest case', function () {
		cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

		cy.intercept(
			'GET',
			'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
			(req) => {
				req.url =
					'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Allu'
				req.continue((res) => {
					expect(res.statusCode).to.equal(403)
				})
			},
		).as('bookretrieval')
		cy.get("button[class='btn btn-primary']").click()
		//cy.wait('@bookretrieval').then(({ request, response }) => {
		// 		const body = response.body
		// 		cy.log(JSON.stringify(body))
		// 		//cy.get('tr').should('have.length', body.length + 1)
		// 	})
		// 	//cy.get('p').should('have.text', 'Oops only 1 Book available')
		// })
	})
})
