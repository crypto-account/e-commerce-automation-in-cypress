import Urls from "./urls";

const emailInput = '#username';
const passwordInput = '#password';
const loginButton = 'button[name=login]';
const myAccountNavigation = 'nav[class="woocommerce-MyAccount-navigation"]';
const errorMessages = 'ul[class="woocommerce-error"]';

class MyAccountPage {   

    enterEmail(email) {
        cy.get(emailInput).type(email);
    }

    enterPassword(password) {
        cy.get(passwordInput).type(password);
    }

    clickLoginButton() {
        cy.get(loginButton).click();
    }

    visitMyAccountPage() {
        const urls = new Urls
        urls.visitMyAccountPage();
    }

    verifyMyAccountPage() {
        cy.get(myAccountNavigation).should('be.visible');
    }
    verifyErrorMessage() {
        cy.get(errorMessages).should('contain', 'BŁĄD: nieprawidłowa nazwa użytkownika lub hasło.');
    }

}

export default MyAccountPage;