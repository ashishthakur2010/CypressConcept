cy.get('.main-nav').find('li').first().as('firstNav') // Alias element as @firstNav
cy.get('input.username').invoke('val').as('username', { type: 'static' }) // Alias that references the value at the time the alias was created
cy.intercept('PUT', '/users').as('putUser') // Alias route as @putUser
cy.stub(api, 'onUnauth').as('unauth') // Alias stub as @unauth
cy.spy(win, 'fetch').as('winFetch') // Alias spy as @winFetch
