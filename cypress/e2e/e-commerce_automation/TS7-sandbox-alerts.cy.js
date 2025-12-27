const url = "https://register.rediff.com/register/register.php?FormName=user_details";

describe("E-commerce Automation - Alerts Handling", () => {
  it("should handle JavaScript alerts", () => {
    cy.visit(url);

    // 1. Obsługa alertu prostego
    cy.get('input[type="submit"]').click(); // Kliknij pole, aby wywołać alert
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.contains("Your Full Name cannot be blank.");
    });
  });
});