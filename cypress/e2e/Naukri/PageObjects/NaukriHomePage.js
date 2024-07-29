class NaukriHomePage {
  elements = {
    url: () => cy.url(),
    ViewProfile: () => cy.get(".view-profile-wrapper a"),
    searchBar: () => cy.get("button.nI-gNb-sb__icon-wrapper"),
    search: {
      searchBar: () => cy.get("button.nI-gNb-sb__icon-wrapper"),
      keywordInput: () =>
        cy.get('input[placeholder="Enter keyword / designation / companies"]'),
      experienceDropdown: () => cy.get("#experienceDD"),
      locationInput: () => cy.get('input[placeholder="Enter location"]'),
      searchButton: () => cy.get(".nI-gNb-sb__icon-wrapper .ni-gnb-icn-search"),
    },
  };

  verifyTheUrl() {
    this.elements.url().should("include", "/mnjuser/homepage");
  }
  navigateToProfile() {
    this.elements.ViewProfile().should("have.text", "View profile").click();
  }
  searchJobTitles() {
    this.elements.searchBar().click();
    this.elements.search.keywordInput().type("Senior QA");
    this.elements.search.searchButton().click();
  }
}

module.exports = new NaukriHomePage();
