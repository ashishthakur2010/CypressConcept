beforeEach("Visite the web-Site", function () {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
});
describe("DOM Commands", function () {
  it("Click on first() index", function () {
    cy.get(".product").first().click();
  });
  it("My Firstĭest case", function () {
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //selenium get hit url in browser, cypress get acts like findElement of selenium
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    //Parent child chaining
    cy.get(".products").as("productsLocator");
    cy.get("@productsLocator").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productsLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();
    cy.get("@productsLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    //assert if logo text is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");

    //this is to print in logs
    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });
    //const logo=cy.get('.brand')
    //cy.log(cy.get('.brand').text())
    // cy.log(logo.text())
  });
  it("My SecondTest case", function () {
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //selenium get hit url in browser, cypress get acts like findElement of selenium

    //Parent child chaining
    cy.get(".products").as("productLocator");
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
  });
});
