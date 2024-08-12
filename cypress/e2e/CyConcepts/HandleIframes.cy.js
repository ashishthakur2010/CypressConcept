/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('handling Iframes', function () {
	it('first Load the iFrame and the use cy.iframe to work ', function () {
		//Check boxes
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

		//cy.get('div.mouse-hover-content').invoke('show')
		cy.frameLoaded('#courses-iframe')
		cy.iframe().find("a[href*='mentorship']").eq(0).click()
		cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
	})
})
