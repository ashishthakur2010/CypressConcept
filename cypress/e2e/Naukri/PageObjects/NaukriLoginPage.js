class NaukriLoginPage {
  elements = {
    url: () => cy.url(),
    loginLink: () => cy.get("#login_Layer"),
    userInput: () => cy.contains("Email ID / Username").next(),
    passInput: () => cy.contains("Password").next(),
    loginButton: () => cy.get(".btn-primary.loginButton"),
  };

  verifyTheUrl() {
    this.elements.url().should("include", "/mnjuser/homepage");
  }
  login(name, email, password) {
    cy.visit("https://www.naukri.com/", {
      headers: { "Accept-Encoding": "gzip, deflate" },
    });

    this.elements.loginLink().click();
    this.elements.userInput().type(email);
    this.elements.passInput().type(password);
    this.elements.loginButton().click();
    cy.get(`div[title="${name}"]`).should("have.text", name);
  }
}

module.exports = new NaukriLoginPage();
