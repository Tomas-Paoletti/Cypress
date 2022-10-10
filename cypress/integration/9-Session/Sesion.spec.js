///<reference types="cypress"/>

describe("Sesiones y cookies", () => {
  it("Sin sesion guardada", () => {
    cy.visit("https://the-internet.herokuapp.com/");

    cy.contains("Form Authentication").click();
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    //cy.get("#password").clear() esto sirve para borar el coontenido del input
    cy.get(".radius").click();
  });
  it("Con sesion guardad", () => {
    //gurdamos la sesion para no repetirlo
    cy.session("Tom", () => {
      cy.visit("https://the-internet.herokuapp.com/");

      cy.contains("Form Authentication").click();
      cy.get("#username").type("tomsmith");
      cy.get("#password").type("SuperSecretPassword!");
      //cy.get("#password").clear() esto sirve para borar el coontenido del input
      cy.get(".radius").click();
      cy.getCookies()//todas la cookies
        .should("have.length", 5)
        .then((cookies) => {
          expect(cookies[0]).to.have.property(
            "name",
            "optimizelyPendingLogEvents"
          );
          cy.getCookie("optimizelyPendingLogEvents").should('exist')//solo una cookie
          cy.getCookie("optimizelyPendingLogEvents").should('not.have.property','value','valor')//para ver que no existe esa cookie dinamica
          cy.clearCookies()//borramos todos las cookies para borrar solo uuna cookkie en singular se pone le comando en singular y el nombre de la cookie
          cy.setCookie('nombreCookie', "valorCookie")
        });
    });
  });
});
