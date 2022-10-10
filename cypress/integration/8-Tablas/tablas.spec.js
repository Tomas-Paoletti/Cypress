///<reference types="cypress"/>

describe("Tablas estaticas y dinamicas", () => {
  beforeEach(() => {});
 /*  it("tablas estatica", () => {
    cy.visit("https://sqengineer.com/practice-sites/practice-tables-selenium/");
    //ubicamos primer columna
    cy.get("#table1 > tbody >tr> td:nth-child(1)").each(
      ($elemento, index, $list) => {
        const t = $elemento.text();
        //buscamos la palabra en la primer columna si la include
        if (t.includes("Ranorex")) {
          cy.get("#table1 > tbody >tr> td:nth-child(1)")
            .eq(index)
            .next()
            .then((p) => {
              //vamos al elemento que le sigue
              const r = p.text();
              //validamos
              expect(r).to.contains("Commercial");
            });
        }
      }
    );
    todo esto se podria cambiar pot un cy.contains('td','Ranorex)
    .next()
    .should('have.text','Commercial')

  }); */
  it('validamos tabla dinamica',()=>{
    cy.visit()//vamos a la pagina
    cy.contains('td', 'palabra clave').prev().find(path).check()

  })
});
