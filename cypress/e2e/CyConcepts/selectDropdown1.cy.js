describe("SelectDropdown tests", () => {
  beforeEach(function () {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );
  });

  it("Select from DropDown by Value", function () {
    cy.get("#select-demo")
      .select("Wednesday")
      .should("have.value", "Wednesday");
  });
  it("Select from DropDown by Index ", function () {
    cy.get("#select-demo").select(4).should("have.value", "Wednesday");
  });
  it("Verify selected value from DropDown", function () {
    cy.get("#select-demo").select(5);
    cy.get("#select-demo option:selected").should("have.text", "Thursday");
  });
  it("multi select DropDown by value", function () {
    cy.get("#multi-select").select(["California", "Ohio", "Washington"]);
  });
  it("multi select DropDown by index", function () {
    cy.get("#multi-select").select([3, 5, 1]);
  });
});
let searchResult = "ipad";
let search = "ipad";
describe("Select value from Amazone Smart Search", function () {
  it("Select value from smartSearch", function () {
    cy.visit("https://www.amazon.in/");
    cy.get("#nav-search-bar-form").type(search);
    cy.get(".left-pane-results-container")
      .find(">div")
      .contains(searchResult)
      .click();
  });
  it("Select value from smartSearch", function () {
    cy.visit("https://www.amazon.in/");
    cy.get("#nav-search-bar-form").type(search);
    cy.get(".left-pane-results-container div").should("have.length", 40);
    cy.get(".left-pane-results-container>div")
      .should("have.length", 10)
      .each(($el, index, $list) => {
        if ($el.text() === searchResult) {
          cy.wrap($el).click();
        }
      });
  });
});
