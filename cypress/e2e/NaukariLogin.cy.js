beforeEach("nakuri", function () {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

  cy.get("#opentab")
    .invoke("attr", "href", "https://www.naukri.com/")
    .should("have.attr", "href", "https://www.naukri.com/");
  cy.get("#opentab").invoke("removeAttr", "target").click();
  cy.wait(5000);
});

describe("login", function () {
  it("should", () => {
    cy.origin("https://www.naukri.com/mnjuser/profile", () => {
      cy.visit("/mnjuser/profile");
      cy.get("#usernameField", { timeout: 5000 }).type(
        "ashish.thakur2010@yahoo.com"
      );
      //   cy.get("#usernameField", { timeout: 2000 }).type(
      //     "ashish.thakur2010@yahoo.com"
      //   );
      cy.get("#passwordField").type("rex2020216000");
      cy.get("button[type='submit']").eq(0).click();
      cy.wait(2000);
      cy.get(".fullname").should("have.text", "Ashish Thakur");
    });
    // cy.visit("/mnjuser/profile", { wait: 3000 }, () => {
    //   // Continue testing the state from beforeEach
    //   cy.get(".fullname").should("have.text", "Ashish Thakur");
    // });
  });
});
