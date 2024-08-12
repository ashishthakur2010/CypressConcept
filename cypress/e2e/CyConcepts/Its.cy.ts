describe('', () => {
	const person = {
		name: 'Ashish',
		age: '33',
		hobbies: ['cricket', 'movies', 'gaming'],
	}
	it('validate data', () => {
		cy.wrap(person).its('name').should('include', 'Ashish')
		cy.wrap(person).its('age').should('eq', '33')
		cy.wrap(person.hobbies).its(1).should('contain', 'movies')
		cy.wrap(person.hobbies).its('length').should('eq', 3) //or
		cy.wrap(person).its('hobbies').should('have.length', 3)
	})
})
