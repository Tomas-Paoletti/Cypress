///<reference types="cypress"/>

describe("Validaciones implicitas y explicitas", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("valdaciones implicitas", () => {
    cy.contains("Input").click();
    cy.get("h3").should("have.text", "Inputs").and("be.visible"); //para hacer varias validaciomes
  });
  it("valdaciones explicitas", () => {
    cy.contains("Input").click();
    cy.get("h3")
    expect('Inputs').to.equals('Inputs')
  });
});
