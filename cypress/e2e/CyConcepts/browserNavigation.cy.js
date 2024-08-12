beforeEach('Visite the website', function () {
	cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
	cy.get('.product').eq(7).find('.product-action').click()
	cy.get('.cart-icon').click()
	cy.contains('PROCEED TO CHECKOUT').click()
	cy.contains('Place Order').should('be.visible')
})
describe('Browser Navigation Test', function () {
	it('Navigate go.back(),go.forward(),reload() for website', function () {
		cy.go('back')
		cy.go('forward')
		cy.reload() //with cache
		cy.reload(true) //without cache
		cy.window().then((data) => {
			//using JavaScript
			data.location.reload()
		})
	})
	it('Navigate go.back(-1),go.forward(+1) website', function () {
		cy.go(-1)
		cy.go(+1)
	})
})
