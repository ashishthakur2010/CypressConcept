/// <reference types="cypress" />
import NaukriHomePage from "../PageObjects/NaukriHomePage";
import NaukriLoginPage from "../PageObjects/NaukriLoginPage";
import NaukriProfilePage from "../PageObjects/NaukriProfilePage";
describe("Login Test", function () {
  beforeEach("Navigate to naukri.com", function () {
    let Name, userName, passWord;
    cy.fixture("NaukriUsers").then(function (data) {
      this.data = data;
      Name = data.user1.name;
      userName = data.user1.email;
      passWord = data.user1.password;
      NaukriLoginPage.login(Name, userName, passWord);
      NaukriHomePage.verifyTheUrl();
    });
  });

  //Cypress._.times(2, (k) => {
  it("Upadte the Resume Headline after login correctly", function () {
    const AboutSections = this.data.user1.ResumeHeadline;
    const resumeHeadlineIconTxt = "Resume headline";
    const provilePageUlr = "/mnjuser/profile";
    NaukriHomePage.navigateToProfile();
    NaukriProfilePage.editResumeHeadline(resumeHeadlineIconTxt, AboutSections);
    cy.verifyURL(provilePageUlr);
    cy.logOut();
  });
  //});

  it("Edite profile for user1", function () {
    // Object.values(this.data).forEach(function (user) {
    const Name = this.data.user1.name;
    const Currentsalary = this.data.user1.CurrentSalary;
    NaukriHomePage.navigateToProfile();
    NaukriProfilePage.editProfile(Name, Currentsalary);
    cy.logOut();
  });
  //});
});
