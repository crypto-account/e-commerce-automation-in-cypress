const url = "http://simpletestsite.fabrykatestow.pl/";

describe("E-commerce Automation - Cookies", () => {     
    
    it("should save and persist cookies", () => {
        cy.visit(url);

        cy.clearCookie("foo");
        cy.clearCookies();
        cy.clearAllCookies();

        // 1. Ustawiamy wartość
        cy.setCookie("foo", "bar");
        cy. getCookie("foo").should("have.property", "value", "bar");
        cy.getCookies();
        cy.getAllCookies();
        
    });
});