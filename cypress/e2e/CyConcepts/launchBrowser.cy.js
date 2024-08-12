before(() => {
	cy.log('before All block')
})
beforeEach(() => {
	cy.log('beforeEach every describe block')
})
describe('Home Page 1 Test Suite', () => {
	beforeEach(() => {
		cy.log('beforeEach every test')
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
	})
	it('Test case 1 ', () => {
		cy.log('Test case 1')
	})
	it('Test case 2 ', () => {
		cy.log('Test case 2')
	})
	it('Test case 3 ', () => {
		cy.log('Test case 3')
	})
})
describe('Home Page 2 Test Suite', () => {
	it('Test case10 - Launch Browder', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
	})
})
