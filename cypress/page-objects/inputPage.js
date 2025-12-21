const input = 'input[type="number"]';

class InputPage {   

    enterNumber() {
    cy.get(input).clear().type('12345').should('have.value', 12345);
    }

    enterLetters() {
    cy.get(input).clear().type('abcde').should('not.have.value', 'abcde');
    }
}
export default InputPage;