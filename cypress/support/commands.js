// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', function (name, email, password) {
	cy.visit('https://www.naukri.com/', {
		headers: { 'Accept-Encoding': 'gzip, deflate' },
	})
	cy.log(Cypress.browser)
	cy.get('#login_Layer').click()
	cy.contains('Email ID / Username').next().type(email)
	cy.get("input[placeholder='Enter your password']").type(password)
	cy.get('.btn-primary.loginButton').click()
	cy.get(`div[title="${name}"]`).should('have.text', name)
})

Cypress.Commands.add('loginWithSession', function (name, email, password) {
	cy.session([name, email, password], () => {
		cy.visit('https://www.naukri.com/', {
			headers: { 'Accept-Encoding': 'gzip, deflate' },
		})
		cy.log(Cypress.browser)
		cy.get('#login_Layer').click()
		cy.contains('Email ID / Username').next().type(email)
		cy.get("input[placeholder='Enter your password']").type(password)
		cy.get('.btn-primary.loginButton').click()
		cy.get(`div[title="${name}"]`).should('have.text', name)
	})
})

Cypress.Commands.add('NavigateToProfile', () => {
	cy.get('.view-profile-wrapper a')
		.should('have.text', 'View profile')
		.click()
})

Cypress.Commands.add('verifyURL', (url) => {
	cy.url().should('include', url)
})

Cypress.Commands.add('logOut', () => {
	cy.get('img.nI-gNb-icon-img').click()
	cy.get('span.ni-gnb-icn-logout').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
