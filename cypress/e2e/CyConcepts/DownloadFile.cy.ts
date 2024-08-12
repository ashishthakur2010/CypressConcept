describe('', () => {
	beforeEach('Login with request command', () => {
		cy.task('deleteFolder', 'cypress/downloads/myresume.txt')
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

	it('create new file upload it then download files', () => {
		cy.contains('Recruitment').click()
		cy.get('.orangehrm-header-container > button').click()

		cy.get("[name='firstName']")
			.clear()
			.type('Naga')
			.should('have.value', 'Naga')
		cy.get("[name='middleName']")
			.clear()
			.type('lakshman')
			.should('have.value', 'lakshman')
		cy.get("[name= 'lastName']")
			.clear()
			.type('Chirukuri')
			.should('have.value', 'Chirukuri')
		cy.get('input').eq(4).clear().type('a@a.com')

		cy.get(" [type='file']").selectFile(
			{
				contents: Cypress.Buffer.from('This is my resume'),
				fileName: 'myresume.txt',
				mimeType: 'text/plain',
				lastModified: Date.now(),
			},
			{ force: true },
		)
		cy.get('form').submit()
		cy.get('.orangehrm-file-preview').click({ force: true })

		cy.readFile('cypress/downloads/myresume.txt').should(
			'contain',
			'resume',
		)
	})

	it.skip('upload files from fixtures', () => {
		cy.contains('Recruitment').click()
		cy.get('.orangehrm-header-container > button').click()
		cy.get("[name='firstName']")
			.clear()
			.type('Naga')
			.should('have.value', 'Naga')
		cy.get("[name='middleName']")
			.clear()
			.type('lakshman')
			.should('have.value', 'lakshman')
		cy.get("[name= 'lastName']")
			.clear()
			.type('Chirukuri')
			.should('have.value', 'Chirukuri')
		cy.get('input').eq(4).clear().type('a@a.com')

		cy.get(" [type='file']").selectFile(
			{
				contents: 'cypress/fixtures/myresume.txt',
				fileName: 'myresume.txt',
				mimeType: 'text/plain',
				lastModified: Date.now(),
			},
			{ force: true },
		)
		cy.get('form').submit()
	})
})
