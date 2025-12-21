const checkbox = 'input[type="checkbox"]';

class CheckboxPage {

    checkFirstCheckbox() {
        cy.get(checkbox).check().first().should('be.checked');
    }

    uncheckLastCheckbox() {
        cy.get(checkbox).last().uncheck().should('not.be.checked');
    }
}

export default CheckboxPage;