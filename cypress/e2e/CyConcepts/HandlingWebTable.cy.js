beforeEach(function () {
	cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})

describe('Handeling WebTable', function () {
	it('verify web table at specific location', function () {
		cy.get('.table-display tr td')
			.eq(1)
			.then(($el) => {
				cy.log($el.prop('outerHTML'))
				const txt = $el.text()
				if (
					txt.includes(
						'Selenium Webdriver with Java Basics + Advanced + Interview Guide',
					)
				);
			})
	})
	it.only('Verify web table at dynamic location', () => {
		cy.get('#product.table-display tr td:nth-child(2)').as('Course')
		cy.get('@Course').each(($el, index, $list) => {
			const txt = $el.text()
			if (
				txt.includes(
					'Master Selenium Automation in simple Python Language',
				)
			) {
				cy.log($el.prop('innerHTML'))
				cy.get('@Course')
					.eq(index)
					.next()
					.then((ele) => {
						cy.log(ele.text())
					})
			}
		})
	})
})
