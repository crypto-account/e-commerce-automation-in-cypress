import "cypress-localstorage-commands"; 

describe("E-commerce Automation - Local Storage", () => {
  const url = "http://simpletestsite.fabrykatestow.pl/";

  it("should save and persist local storage value", () => {
    cy.visit(url);

    // 1. Ustawiamy wartość
    cy.setLocalStorage("testKey", "testValue");
    
    // 2. ZAPISUJEMY stan (teraz 'testKey' jest w pamięci biblioteki)
    cy.saveLocalStorage();

    // 3. Czyścimy storage lub przeładowujemy stronę
    cy.clearLocalStorage();
    cy.reload();

    // 4. PRZYWRACAMY stan
    cy.restoreLocalStorage();

    // 5. Weryfikujemy
    cy.getLocalStorage("testKey").should("eq", "testValue");
  });
});