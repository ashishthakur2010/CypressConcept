class NaukriProfilePage {
  elements = {
    url: () => cy.url(),
    editProfile: {
      editProfileButn: () => cy.get("em.icon.edit"),
      nameFld: (name) => cy.get("#name").clear(),
      ExpRedioBtu: () => cy.get("#exp-radio").invoke("val"),
      totalExp: () => cy.get("#ul_exp-years-droope ul li").invoke("show"),
      currentSal: () => cy.get("#totalAbsCtc_id").invoke("val"),
      saveBasicDetailsBtn: () => cy.get("#saveBasicDetailsBtn"),
    },
    editIcons: (key) =>
      cy
        .get(".widgetTitle")
        .contains(key)
        .siblings()
        .should("have.class", "edit"),
    resumeHeadlineTxtFild: () =>
      cy
        .get(".resumeHeadlineTxt.materialize-textarea")
        .should("be.visible")
        .clear(),
    resumeHeadlineSavbuttn: () => cy.get(".action.s12 .btn-dark-ot"),
  };

  editProfile(name, currentSalary) {
    this.elements.editProfile.editProfileButn().click();
    this.elements.editProfile.nameFld().type(name);
    this.elements.editProfile.ExpRedioBtu().should("eq", "on");
    this.elements.editProfile.totalExp().contains(" 10 Years ");
    this.elements.editProfile.currentSal().then((text) => {
      let salary = 0;
      cy.log(text);
      if (text.includes("35,00,000")) {
        salary = currentSalary;
        cy.log("salary", salary);
        cy.get("#totalAbsCtc_id").clear().type(salary);
      } else {
        salary = 3500000;
        cy.get("#totalAbsCtc_id").clear().type(salary);
      }
    });
    this.elements.editProfile.saveBasicDetailsBtn().click({ force: true });
  }

  editResumeHeadline(textToFind, AboutSections) {
    this.elements.editIcons(textToFind).click({ force: true });
    this.elements.resumeHeadlineTxtFild().type(AboutSections);
    this.elements.resumeHeadlineSavbuttn().click({ force: true });
  }
}
module.exports = new NaukriProfilePage();
