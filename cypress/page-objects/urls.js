class Urls {
    visitHomePage() {
        const url = '/';
        cy.visit(url);
    }

    visitTestPage() {
        const url = '/testpage';
        cy.visit(url);
    }
}

export default Urls;