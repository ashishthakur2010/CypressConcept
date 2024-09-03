describe('Ene to end test suit', () => {
	beforeEach('visite the page', () => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
		)
		cy.get("input[name='username']").type('Admin')
		cy.get("input[name='password']").type('admin123')
		cy.get("button[type='submit']").click()
		cy.url().should('contains', 'dashboard')
		cy.getAllCookies()
			.should('have.length', 1)
			.then((cookies) => {
				expect(cookies[0]).to.have.property('name', 'orangehrm')
			})
	})

	it.skip('login', function () {
		cy.get("input[name='username']").type('Admin')
		cy.get("input[name='password']").type('admin123')
		cy.get("button[type='submit']").click()
		cy.url().should('contains', 'dashboard')
		cy.getAllCookies()
			.should('have.length', 1)
			.then((cookies) => {
				expect(cookies[0]).to.have.property('name', 'orangehrm')
			})
	})

	it('Navigate the menu', () => {
		cy.get('ul.oxd-main-menu span').each(($el, index) => {
			cy.log($el.text())
			if ($el.text().includes('PIM')) {
				//cy.wrap($el).eq(index).click
				cy.get('ul.oxd-main-menu span').eq(index).click()
			}
		})
	})
})
