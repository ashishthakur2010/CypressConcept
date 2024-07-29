/// <reference types="cypress" />
import NaukriHomePage from "../PageObjects/NaukriHomePage";

describe("Testing Home Page using POM in cypress", function () {
  beforeEach("Navigate to naukri.com", function () {
    let data1;
    let Name, userName, passWord, AboutSections;
    cy.fixture("NaukriUsers").then(function (data) {
      data1 = data;
      Name = data.user1.name;
      userName = data1.user1.email;
      passWord = data1.user1.password;
      AboutSections = data1.user1.ResumeHeadline;
      cy.login(Name, userName, passWord);
    });
  });

  //Cypress._.times(2, (k) => {
  it("Upadte the Resume Headline after login correctly", function () {
    NaukriHomePage.verifyTheUrl();
    cy.logOut();
  });
  it.only("Search jobs using searchBar", function () {
    NaukriHomePage.searchJobTitles();
  });
});
