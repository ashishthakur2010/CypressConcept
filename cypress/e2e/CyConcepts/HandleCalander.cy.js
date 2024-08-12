/// <reference types="Cypress" />

describe('My First Test Suite', () => {
	const year = '2022'
	const month = '11'
	const day = '15'
	const date = [month, day, year]
	it('enter calander using veriables', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
		cy.get('.react-date-picker__button').eq(1).click()
		cy.get('.react-calendar__navigation__label').click()
		cy.get('.react-calendar__navigation__label').click()
		cy.get('.react-calendar__decade-view__years__year')
			.contains(date[2])
			.click()
		cy.get('.react-calendar__year-view__months__month abbr')
			.eq(date[0] - 1)
			.click()
		cy.contains('abbr', date[1]).click()
		//cy.log(cy.get(".react-date-picker__inputGroup").text);

		cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
			cy.wrap($el)
				.should('have.attr', 'value', date[index]) //OR
				.invoke('val')
				.should('eq', date[index]) //OR using then instead to handle the promise
				.then((text) => {
					cy.log(text)
					expect(text).to.eq(date[index])
				})
		})
	})
})
