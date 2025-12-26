class Urls {
    visitHomePage() {
        const url = '/';
        cy.visit(url);
    }

    visitTestPage() {
        const url = '/testpage';
        cy.visit(url);
    }

    visitMyAccountPage() {
        const url = '/moje-konto';
        cy.visit(url);
    }
}

export default Urls;