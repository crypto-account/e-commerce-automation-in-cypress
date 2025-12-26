const keyPressInput = '#target';
const keyPressResult = '#keyPressResult';

class KeyPressPage {

    typeKeyPress(key) {
        cy.get(keyPressInput).type(key);
    }
    verifyKeyPressResult(key) {
        cy.get(keyPressResult).should('have.text', `${key}`);
    }
}

export default KeyPressPage;