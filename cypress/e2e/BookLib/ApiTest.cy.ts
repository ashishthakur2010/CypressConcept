/// <reference types="cypress" />
describe('My First Test Suite', function () {
	it('My FirstTest case', function () {
		cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
			name: 'Learn Appium Automation with Java',
			isbn: 'bcd',
			aisle: '2926',
			author: 'John foer',
		}).then(function (res) {
			expect(res.body).to.have.property('Msg', 'Book Already Exists')
			expect(res.status).to.eq(200)
		})
	})
})
