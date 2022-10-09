

describe('Home de wwfreerangetester',()=>{
    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com/')
    })
    it('should have a title',()=>{
        cy.title().should('include', 'Free Range Testers')
       
        cy.contains('Iniciar Sesión')// busca texto que contenga la palabras dentro de la funcion
    })
    it('Hay 12 botones de  cursos con el boton ver mas', ()=>{
        cy.xpath("//p[@id='comp-l02x1m8d2label']").click()
        cy.get(' [data-testid="linkElement"] > ._1Qjd7').should('have.length',12)
    })
    it('El campo Nombre del formulario posee clase: _1SOvY has-custom-focus',()=>{
       cy.get('#input_comp-l1ed927d').should('have.class','_1SOvY has-custom-focus')
    })
    it('Hay un link llamado Blog  en la barra de navegacion',()=>{
        cy.get('#comp-l02x1m8d1label').should('have.text','Blog')

    })
    it('Existe un boton de Empezar a aprender', ()=>{
        cy.wait(2000)// espera en segundos
        cy.xpath("//span[contains(text(),'Empezá a aprender!')]").should('be.visible')// ver si esta visible para saber si no esta visible pones 'not.be.visible' y si solo queremos saber si esxiste (incluye si se ve o no) usamos 'exist'
    })
    it('El elemento esta chequeado', ()=>{
        cy.get('').should('be.checked')// lo mismo que con visible 
    })
    it('El elemento esta deshabilitado',()=>{
        cy.get().should(be.disable)
        
    })
})