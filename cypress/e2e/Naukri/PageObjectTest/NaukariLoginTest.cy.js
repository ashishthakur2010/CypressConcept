/// <reference types="cypress" />
import NaukriHomePage from "../PageObjects/NaukriLoginPage";
describe("Login Test", function () {
  beforeEach("Navigate to naukri.com", function () {
    let Name, userName, passWord, AboutSections;
    cy.fixture("NaukriUsers").then(function (data) {
      this.data = data;
      Name = data.user1.name;
      userName = data.user1.email;
      passWord = data.user1.password;
      NaukriHomePage.login(Name, userName, passWord);
      NaukriHomePage.verifyTheUrl();
    });
  });

  //Cypress._.times(2, (k) => {
  it("Upadte the Resume Headline after login correctly", function () {
    const Name = this.data.user1.name;
    const AboutSections = this.data.user1.ResumeHeadline;
    cy.NavigateToProfile();
    cy.get(".widgetHead span.edit.icon").eq(0).click({ force: true });
    cy.get(".resumeHeadlineTxt.materialize-textarea")
      .should("be.visible")
      .clear()
      .type(AboutSections, { delay: 0 });
    cy.get(".action.s12 .btn-dark-ot").click();
    cy.get(".fullname").should("have.text", Name);
    cy.logOut();
  });
  //});

  it("Edite profile for user1", function () {
    // Object.values(this.data).forEach(function (user) {
    const Name = this.data.user1.name;
    const Currentsalary = this.data.user1.CurrentSalary;
    cy.NavigateToProfile();
    cy.get("em.icon.edit").click();
    cy.get("#name").clear().type(Name);
    cy.get("label[for='exp-radio']").click();
    cy.get("#ul_exp-years-droope ul li").invoke("show").contains(" 10 Years ");
    cy.get("#totalAbsCtc_id")
      .invoke("val")
      .then((text) => {
        let salary = 0;
        cy.log(text);
        if (text.includes("35,00,000")) {
          salary = Currentsalary;
          cy.log("salary", salary);
          cy.get("#totalAbsCtc_id").clear().type(salary);
        } else {
          salary = 3500000;
          cy.get("#totalAbsCtc_id").clear().type(salary);
        }
      });
    cy.get("#saveBasicDetailsBtn").click({ force: true });
    cy.logOut();
  });
  //});
});
