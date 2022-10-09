describe('utilades para debugging con Cypress',()=>{

        
    it('cy.log',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.log('Escribe el usernane')
        cy.get('#username').type('tomsmith').pause()// pausa despues de la accion del  elemnto
        cy.log('Escribe el password')
        cy.get('#password').type('SuperSecretPassword!').debug();// esto debe andar siempre con un elemento, esto nos mustra informascion del elemento
        cy.log('Hace click en le boton de login')
        cy.get('form').contains('Login').click()
        cy.url().should('contain','/secure')
    })
})