// 1. Create Reservation Successfully:
describe("Login Failure", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://e1-vhp.com/");
  });

  it("should fail to log in with invalid credentials", () => {
    // Visit login page
    cy.visit("https://e1-vhp.com/");

    // Enter invalid credentials
    cy.get('input[type="text"]').type("invalidusername");
    cy.get('input[type="password"]').type("invalidpassword");

    // Submit login form
    cy.get('button[type="submit"]').click();

    // Verify login failure
    cy.url().should("include", "https://e1-vhp.com/login");
    cy.get(".q-field__messages").should(
      "contain",
      "Please input valid username format"
    );
  });
});
