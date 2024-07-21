/// <reference types="Cypress" />

describe(
  "Handling NewTab Windows and Child Window",
  { defaultCommandTimeout: 50000 },
  () => {
    it("Handle NewTab Windows by deleting target using Invoke()", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

      cy.get("#opentab").invoke("removeAttr", "target").click();
      cy.origin("https://www.qaclickacademy.com/", () => {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should("contain", "QAClick Academy");
      });
    });
    it("Handle NewTab Windows by using extracting new Url using $el.prop'(href'))", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get("#opentab").then(($el) => {
        cy.log("Inner HTML:", $el.prop("innerHTML"));
        //or
        cy.log("Inner HTML:", $el.html());
        cy.log("Text Content:", $el.text());
        cy.log("url:", $el.prop("href"));
        const url = $el.prop("href");
        cy.visit(url);
      });
      cy.origin("https://www.qaclickacademy.com/", () => {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should("contain", "QAClick Academy");
      });
    });
  }
);
