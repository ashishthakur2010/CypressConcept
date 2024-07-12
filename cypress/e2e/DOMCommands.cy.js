beforeEach("Visite the web-Site", function () {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  cy.get(".products .product").as("Productlist"); // Alias element'.products .product' as @Productlist
});
//Facts
//cssSelects: To traversal from parent to child use space between selectors.
//eg: .products .product

describe("DOM Commands", function () {
  it("Click on first() index", function () {
    cy.get(".products").children().first().click();
  });

  it("Click on last() index", function () {
    cy.get("@Productlist").last().click({ force: true });
  });
  it("Click using eq() for specific Index", function () {
    cy.get("@Productlist").eq(-2).click();
    cy.reload();
    cy.get("@Productlist").eq(2).click();
  });

  it("Find the closest() ancestor of class .product", function () {
    // Find the closest ancestor with the class 'parent'
    cy.get(".product").closest(".products").should("have.class", "products"); //cy.get(selector).closest(ancestorSelector)
    // Further traversing up to the grandparent
    cy.get(".product").closest(".container").should("have.class", "container"); //cy.get('selector').closest('.grandparent').should('have.class', 'grandparent');
  });
  it("children() ", function () {
    cy.get(".products").children(".product").should("have.length", 30);
    cy.get(".products").children().should("have.length", 30);
  });

  it("should have the correct title using document()", () => {
    cy.document().its("title").should("eq", "GreenKart - veg and fruits kart");
    cy.document().then((doc) => {
      expect(doc.URL).to.equal(
        "https://rahulshettyacademy.com/seleniumPractise/#/"
      );
    });
    cy.document().then((doc) => {
      doc.write("<h1>Hello World</h1>");
    });
    cy.document().then((doc) => {
      doc.cookie = "myCookie=myValue; path=/";
    });
    cy.getCookie("myCookie").should("have.property", "value", "myValue");
    cy.document().then((doc) => {
      doc.body.style.backgroundColor = "blue";
    });
    cy.get("body").should("have.css", "background-color", "rgb(0, 0, 255)");
  });

  it("Click using contains", function () {
    cy.get("@Productlist").contains("Cucumber - 1 Kg").click();
  });
  it("Click using find()", function () {
    cy.get("@Productlist").find('>div>img[alt="Carrot - 1 Kg"]').click();
    // OR cy.get("div").find('>div>img[alt="Carrot - 1 Kg"]').click();
  });
  it("Click using filter()", function () {
    cy.get("@Productlist")
      //.find('img[alt="Carrot - 1 Kg"]')
      .find("img")
      .filter('div img[alt="Carrot - 1 Kg"]')
      .click();
  });
  it("find product using filter()", function () {
    cy.get("@Productlist")
      .children(".product-name")
      .filter((index, item) => {
        if (item.innerText.length < 8) {
          const itm = item.innerText;
          cy.log(index, itm);
        } else if (item.innerText.includes("Carrot - 1 Kg")) {
          const itm = item.innerText;
          cy.log(index, itm);
        }
        return item.innerText.length < 9;
      })
      .should("have.length", 1)
      .and("have.text", "Capsicum");
  });

  it("filter().prev()", function () {
    cy.get("@Productlist")
      .children("[class*='-price']")
      .filter((index, item) => {
        if (item.innerText.includes(72)) {
          const prs = parseInt(item.innerText);
          cy.get(item).prev("h4").should("have.text", "Apple - 1 Kg");
          cy.log(index, prs);
          return parseInt(item.innerText.replace("Rs. ", "")) > 15;
        }
      });
    //.should("have.text", 16);
  });

  it.only("filter() Check if the item text includes '72' and price is greater than 15", function () {
    const expectedTexts = ["Mushroom", "Corn", "Mango", "Orange"]; // Ensure this matches your data

    cy.get("@Productlist")
      .children("[class*='-price']")
      .filter((index, item) => {
        //const priceText = item.innerText.replace("Rs. ", "");
        const price = parseInt(item.innerText);

        // Check if the item text includes '72' and price is greater than 15
        if (item.innerText.includes("75") && price > 15) {
          cy.wrap(item)
            .prev("h4")
            .then(($prev) => {
              const productName = $prev.text();
              cy.log(
                `Index: ${index}, Price: ${price}, Product: ${productName}`
              );

              // Using the actual product name to find the corresponding expected text
              const expectedText = expectedTexts.find((text) =>
                text.includes(productName.split(" - ")[0])
              );
              expect(productName.split(" - ")[0]).to.equal(expectedText);
            });

          return true;
        }

        return false;
      });
  });
});
