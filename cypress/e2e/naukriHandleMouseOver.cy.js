beforeEach("Login to Mynaukri.com", () => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

  cy.get("#opentab")
    .invoke("attr", "href", "https://www.naukri.com")
    .should("have.attr", "href", "https://www.naukri.com");
  cy.get("#opentab").invoke("removeAttr", "target").click();

  cy.origin("https://www.naukri.com/", () => {
    cy.get("#login_Layer").click();
    cy.get("input[placeholder='Enter your active Email ID / Username']", {
      timeout: 10000,
    }).type("ashish.thakur2010@yahoo.com");
    cy.get("input[placeholder='Enter your password']", { timeout: 10000 }).type(
      "rex2020216000"
    );
    cy.get(".btn-primary.loginButton", { timeout: 10000 }).click();
    cy.get("div[title='Ashish Thakur']", { timeout: 20000 }).should(
      "have.text",
      "Ashish Thakur"
    );
  });
});
describe("#login_Layer", () => {
  it("performs tests on another-domain.com", () => {
    // As cy.origin cannot be used here directly again if we're interacting with another-domain.com,
    // you would typically perform actions that don't need a new cy.origin call
    // If you do need to interact with another-domain.com again:
    cy.origin("https://www.naukri.com/", () => {
      // Continue testing the state from beforeEach
      cy.get("div[title='Ashish Thakur']", { timeout: 20000 }).should(
        "have.text",
        "Ashish Thakur"
      );
    });
  });
});
