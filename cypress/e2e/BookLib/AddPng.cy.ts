describe('Try to add Image', () => {
	beforeEach(() => {
		cy.intercept('**/*', (req) => {
			req.reply({
				fixture: 'images.png',
				headers: {
					'Content-Type': 'image/png', // Set the content type to image/png
				},
			})
		})
	})

	it('sdfsf', () => {
		cy.visit('https://automationintesting.online/')

		cy.request('https://automationintesting.online/room/').then(
			(response) => {
				expect(response.status).to.equal(200)
				expect(response.body.rooms[0].roomName).to.equal('101')
				cy.log(JSON.stringify(response.body))
			},
		)
	})
})
