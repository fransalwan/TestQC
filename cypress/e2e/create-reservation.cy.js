// 1. Create Reservation Successfully:
describe("Create Reservation Successfully", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://e1-vhp.com/");
  });

  it("should navigate to the module reservation", () => {
    cy.get('input[type="text"]').type("sindata@qcperseus");
    cy.get('input[type="password"]').type("cloud@35");
    cy.get('button[type="submit"]').click();

    // Wait for authentication and redirection to complete
    cy.url().should("include", "https://e1-vhp.com/login");
    cy.get(".q-btn__content").contains("OK").click();
  });

  it("should navigate to the module reservation", () => {
    cy.url().should("include", "https://e1-vhp.com");

    cy.contains("Front Office Reception").click();
    cy.url().should("include", "https://e1-vhp.com/fr/reservation");
    cy.get('img[src^="data:image/svg+xml"]').click(); // ? butuh unik element.
  });

  // ? note: cara mendapatkan atau getting element unik dengan inspect element masih belum cukup.
  // ? contoh case: saat melakukan get element pada button add di halaman reservation. (mungkin membutuhkan source code FE nya).
});
