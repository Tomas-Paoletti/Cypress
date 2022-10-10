///<reference types="cypress"/>

describe("pruebas de Api con Cypress", () => {
  it("El endpoint Posts responde con el status 200", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request({
      url: "https://jsonplaceholder.typicode.com/posts/",
    }).then((respuesta) => {
      expect(respuesta.status).to.eq(200);
    });
  });
  it("El endpoit  eine 100 entradas", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("/posts").its("body").should("have.length", 100);
  });
  it("El post n1, tinene de titulo sunt aut facere repellat provident occaecati excepturi optio reprehenderit", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("/posts/1")
      .its("body")
      .should(
        "have.property",
        "title",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
  });
  it("Enviando post request", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts/", {
      userId: 1,
      id: 111,
      title: "Holaa",
      body: "Hola como estas broooo",
    }).then((respuesta) => {
      expect(respuesta.body).to.have.property("title", "Holaa"); //comprobacion
    });
  });

  it("EL PUT request es para modificar algo que no va a camabiar tanto", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts/", {
      userId: 1,
      id: 111,
      title: "Holaa",
      body: "Hola como estas broooo",
    }).then((respuesta) => {
      expect(respuesta.body).to.have.property("title", "Holaa"); //comprobacion
    });
  });
});
