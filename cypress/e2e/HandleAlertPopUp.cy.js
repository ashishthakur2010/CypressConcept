describe("handle Alert", () => {
  // cy.get("#alertbtn").click();
  // cy.get("#confirmbtn").click();

  it("handle Alert using cy.on('window.alert', (str)", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.on("window.alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });
  it("handle Alert using cy.on('window.confirm', (str)", () => {
    cy.on("window.confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
