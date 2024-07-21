beforeEach("nakuri", function () {
  cy.visit("https://www.naukri.com/", {
    headers: { "Accept-Encoding": "gzip, deflate" },
  });
});

describe("login", function () {
  it("should", () => {
    console.log(Cypress.browser);
    cy.get("#login_Layer").click();
    cy.get("input[placeholder='Enter your active Email ID / Username']").type(
      "ashish.thakur2010@yahoo.com"
    );
    cy.get("input[placeholder='Enter your password']").type("rex2020216000");
    cy.get(".btn-primary.loginButton").click();
    cy.get("div[title='Ashish Thakur']").should("have.text", "Ashish Thakur");
    cy.get(".view-profile-wrapper a")
      .should("have.text", "View profile")
      .click();
    cy.get(".widgetHead span.edit.icon").eq(0).click({ force: true });
    cy.get(".resumeHeadlineTxt.materialize-textarea")
      .clear()
      .type(
        "ISTQB certified Principal Test Engineer in Evora Global with overall 9+ years of total IT experience in all phases of software test life cycle, with expertise across modules of ERP & E-Commerce domains. Selenium, SQL database testing.",
        { delay: 0 }
      );
    cy.get(".action.s12 .btn-dark-ot").click();

    cy.get(".fullname").should("have.text", "Ashish Thakur");
    //cy.on(window.alert);
  });
});
