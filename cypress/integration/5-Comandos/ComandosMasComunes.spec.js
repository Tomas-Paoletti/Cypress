///<reference types="cypress"/>

describe("Pruebas sobre UI", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });
  it("Ejemplo de click", () => {
    cy.contains("Add/Remove Elements").click();
    cy.get("button").click();
    cy.get(".added-manually").click();
  });
  it("Ejemplo de escritura", () => {
    cy.contains("Form Authentication").click();
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    //cy.get("#password").clear() esto sirve para borar el coontenido del input
    cy.get(".radius").click();
  });

  it("elegir y sacar checkboxes", () => {
    cy.contains("Checkboxes").click();
    cy.get("#checkboxes > :nth-child(1)").check();
    cy.get("#checkboxes > :nth-child(3)").uncheck();
  });
  it("Dropdowns", () => {
    cy.contains("Dropdown").click();
    cy.get("#dropdown").select("Option 2"); //se escribe el valor que uqeremos elegir o se puede poner el numero y lo elige por el index
  });
  it("Elementos ocultos", () => {
    cy.contains("Hovers").click();
    cy.xpath("//body/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]").click({
      force: true,
    }); //con esto logramos tocar en elmentos invisibles por el hover forzando el click
  });
  it("Right click y alerta", () => {
    cy.contains("Context Menu").click();
    cy.get("#hot-spot").rightclick(); //selenium no muestra alertas
    cy.get("#hot-spot").invoke("trigger", "contextmenu");//con esto se invoca la alerta
    cy.on("window:alert", (alert)=>{
        expect(alert).to.equal("You selected a context menu")
    })//esta manera es mejor por que comparamos el valor del mensaje
  });
});
