 ///<reference types="cypress"/>



describe('Pruebas sobre la ui', ()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/")
    })
    it('nueva pestania', ()=>{
        cy.contains('Multiple Windows').click()
        cy.contains("Click Here").invoke('removeAttr','target').click()// con esto no se se abre otra pestania 
        cy.contains('New Window').should('have.text','New Window')
    })
    it('Shadow DOM', ()=>{
        cy.contains('Shadow DOM').click()
        //cy.get('#content > :nth-child(3)').shadow().should('have.text', 'In a list')//para buscar escondidos
    })
    it('Primer y el ultimo elemento', ()=>{
        cy.contains('Dynamic Content').click()
        cy.get('img').eq(2).should('be.visible')// con estas etiquetas valida firt, last y eq ( aca toma los numeros en orden como los array empezando desde el 0)
        cy.get('#content > :nth-child(7)').children()
       
    })
    it('Invoke', ()=>{
        cy.contains('Dinamic Content')
        .should('be.hidden')
        .invoke('show')
        .should('be.visible')// hacemos al elemento visible
    })
})