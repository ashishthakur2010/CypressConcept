describe('', () => {
	it('Login with request command', () => {
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
})
