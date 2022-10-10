///<reference types="cypress"/>

describe("Validaciones implicitas y explicitas", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("Espera que las promesas se cumplan", () => {
    let waited = false;

    function waitSecond() {
      return new Cypress.Promise((resolve, reject) => [
        setTimeout(() => {
          waited = true;
          resolve("foo");
        }, 1000),
      ]);
    }

    cy.wrap(null).then(() => {
      //promesas
      return WaitOneSecond().then((str) => {
        expect(str).to.eq("foo");

        expect(waited).to.be.true;
      });
    });
  });
});
