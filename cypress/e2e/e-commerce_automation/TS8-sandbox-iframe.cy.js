const url = 'http://simpletestsite.fabrykatestow.pl/';
const iFrameHeader = '#iframe-header';
const iFrameSelector = 'iframe[src="simplebuttons.html"]'; // Bardziej precyzyjny
const buttonSelector = '#simpleButton1';

describe('iFrame Handling Test', () => {

    it('should interact with elements inside an iframe', function() {
        cy.visit(url);

        // Rozwijamy sekcję akordeonu
        cy.get(iFrameHeader).click();

        // Prawidłowe wejście do iFrame przy użyciu aliasu lub łańcuchowania
        cy.get(iFrameSelector)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap) // To "opakowuje" body i przekazuje dalej w łańcuchu
            .find(buttonSelector)
            .click();
            
        // Opcjonalnie: sprawdzenie czy kliknięcie zadziałało
        // cy.get(iFrameSelector).then(cy.wrap).find('#jakis-komunikat').should('be.visible');
    });
});