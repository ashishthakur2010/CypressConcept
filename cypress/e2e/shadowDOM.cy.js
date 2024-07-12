beforeEach(function () {
  Cypress.once("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("https://selectorshub.com/xpath-practice-page/");
});
describe("Handeling Shadow DOM elements", () => {
  it("Find shadow DOM elements using .shadow() ", () => {
    cy.get("#userName")
      .shadow()
      .find("#app2")
      .shadow()
      .find("#pizza")
      .type("Shadow DOM Text");
  });

  it("Find shadow DOM elements With globle configration ", () => {
    cy.get("#pizza").type("Shadow DOM Text");
  });

  it("Find shadow DOM elements With local configration ", () => {
    cy.get("#pizza", { includeShadowDom: true }).type("Shadow DOM Text");
  });
});
