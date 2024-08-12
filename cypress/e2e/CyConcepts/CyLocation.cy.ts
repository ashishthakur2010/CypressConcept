// https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index?q=test#header
// Protocol : https
// Host: opensource-demo.orangehrmlive.com
// Origin: https://opensource-demo.orangehrmlive.com
// Pathname: web/index.php/dashboard/index
// Href: https ://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index?q=test#header
// Port :
// Hash: header
// toString
// Search: ?q=test

describe('', () => {
	beforeEach('Login with request command', () => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
		)
		cy.get('[name="_token"]').invoke('attr', 'value').as('token')
		cy.get('@token').then((token) => {
			cy.request({
				method: 'POST',
				url: '/web/index.php/auth/validate',
				form: true,
				body: {
					_token: token,
					username: 'Admin',
					password: 'admin123',
				},
			}).then((req) => {
				cy.visit(
					'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
				)
				cy.url().should('include', 'dashboard')
			})
		})
	})

	it('validate data', () => {
		cy.location().then((loc) => {
			expect(loc.protocol).to.equal('https:')
			expect(loc.host).to.equal('opensource-demo.orangehrmlive.com')
			expect(loc.pathname).to.equal('/web/index.php/dashboard/index')
			expect(loc.search).to.equal('')
			expect(loc.hash).to.equal('')
			expect(loc.href).to.equal(
				'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
			)
		})
		cy.location('origin').should(
			'eq',
			'https://opensource-demo.orangehrmlive.com',
		)
		cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
	})
})
