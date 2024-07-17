describe("Handling Child Windows", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab")
      .invoke("attr", "href", "https://www.naukri.com")
      .should("have.attr", "href", "https://www.naukri.com");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.get("#opentab").then(($el) => {
      cy.log("Outer HTML:", $el.prop("outerHTML"));
      cy.log("Inner HTML:", $el.prop("innerHTML"));
      //or
      cy.log("Inner HTML:", $el.html());
      cy.log("Text Content:", $el.text());
    });

    cy.origin("https://www.naukri.com/", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
