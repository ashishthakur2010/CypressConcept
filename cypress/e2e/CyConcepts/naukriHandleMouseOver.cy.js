beforeEach('Login to Mynaukri.com', () => {
	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

	cy.get('#opentab')
		.invoke('attr', 'href', 'https://www.naukri.com/')
		.should('have.attr', 'href', 'https://www.naukri.com/')
	cy.get('#opentab').invoke('removeAttr', 'target').click()
})

describe('#login_Layer', { defaultCommandTimeout: 50000 }, () => {
	it('performs tests on another-domain.com', () => {
		// As cy.origin cannot be used here directly again if we're interacting with another-domain.com,
		// you would typically perform actions that don't need a new cy.origin call
		// If you do need to interact with another-domain.com again:
		cy.origin('https://www.naukri.com', () => {
			cy.get('#login_Layer').click()
			cy.get(
				"input[placeholder='Enter your active Email ID / Username']",
			).type('ashish.thakur2010@yahoo.com')
			cy.get("input[placeholder='Enter your password']").type(
				'rex2020216000',
			)
			cy.get('.btn-primary.loginButton').click()
			cy.get("div[title='Ashish Thakur']").should(
				'have.text',
				'Ashish Thakur',
			)
			cy.get('.view-profile-wrapper a')
				.should('have.text', 'View profile')
				.click()
			cy.get('.widgetHead.typ-16Bold .edit.icon').click()
			cy.get('.fullname')
				.should('be.visible')
				.then(() => {
					// Suppose the click triggers loading of new content dynamically
					// Use cy.wait() to add an arbitrary delay if needed to wait for something like an AJAX call
					cy.wait(2000) // Wait for 2000 milliseconds
				})
				.and('have.text', 'Ashish Thakur')

			cy.get('.widgetHead.typ-16Bold .edit.icon').click()
		})
	})
})
