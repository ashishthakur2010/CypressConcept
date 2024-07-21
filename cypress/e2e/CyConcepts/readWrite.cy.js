import user from "../../fixtures/user.json";
const filePath = "cypress/fixtures/";

describe("Read and Write File Suite", () => {
  it("Write a Test file at specific Path", () => {
    cy.writeFile(filePath + "Test1.txt", "Cypress test\n");
  });

  it("Write and update existing file at specific Path", () => {
    cy.writeFile("cypress/fixtures/Test1.txt", "Hello World\n", {
      flag: "a+",
    });
  });

  it("Write a Json file at specific Path", () => {
    cy.writeFile(filePath + "Test2.json", {
      data1: "Hello",
      data2: "World",
    });
  });

  it("Appand or write existing file", () => {
    cy.writeFile("cypress/fixtures/Test1.txt", "New Text", {
      flag: "a+",
    });
  });

  it("Read a Test file at specific Path", () => {
    cy.readFile("cypress/fixtures/Test1.txt").should("exist");
  });

  it("Read a Test file at specific Path and verify inner text using contains", () => {
    cy.readFile("cypress/fixtures/Test1.txt")
      .should("exist")
      .and("contains", "Hello");
  });

  it("Read a Test file at specific Path", () => {
    cy.readFile("cypress/fixtures/Test1.txt").then((data) => {
      cy.log("Print: ", data);
    });
  });

  it("Read a Json file at specific Path", () => {
    cy.readFile(filePath + "Test2.json").then((data) => {
      cy.log("Print: ", data);
    });
  });

  it("loads the same object", () => {
    cy.writeFile(filePath + "usercopy.json", {
      user: {
        firstName: "Ashish",
        lastName: "Thakur",
        name: "Ashish Thakur",
        age: 30,
        email: "ashish@example.com",
        body: "Fixtures are a great way to mock data for responses to routes",
      },
    });
    cy.fixture("usercopy").then((userFixture) => {
      expect(user, "Ashish is the user").to.deep.equal(userFixture);
      expect(user, "ashish@example.com").to.deep.equal(userFixture);
      expect(user, 30).to.deep.equal(userFixture);
    });
  });
});
