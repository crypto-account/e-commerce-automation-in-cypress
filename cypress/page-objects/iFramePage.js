const button1 = '#simpleButton1';
const successMsg = '#buttonMsg'; // Na tej stronie tekst pojawia się w konkretnym ID

class IFramePage {  
    // Metoda pomocnicza do pobierania body IFrame (reusable)
    getIframeBody() {
        return cy.get('iframe[src="simplebuttons.html"]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap);
    }

    clickButton1() {
        this.getIframeBody().within(() => {
            cy.get(button1).click();
            // Asercja: szukamy tekstu wewnątrz body iframe
            cy.contains('Button 1 was clicked!').should('be.visible');
        });
    }

    verifyButtonClicked() {
        this.getIframeBody().within(() => {
            cy.contains('Button 1 was clicked!').should('be.visible');
        });
    }   
}

export default IFramePage;