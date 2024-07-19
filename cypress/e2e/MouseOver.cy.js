describe("Handle Mouse Events using JQuary function with cypress", function () {
  it("Handle Mouse Events using invoke()", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });
  it("Handle MouseOver Hidden ele using .click({ force: true }) ", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
