describe("Handling Child Windows", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.get("#opentab").then(($el) => {
      cy.log("Outer HTML:", $el.prop("outerHTML"));
      cy.log("Inner HTML:", $el.prop("innerHTML"));
      //or
      cy.log("Inner HTML:", $el.html());
      cy.log("Text Content:", $el.text());
    });
    //<a id="opentab" class="btn-style class1 class2" href="https://www.qaclickacademy.com">Open Tab</a>

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
