const usernameInput = '#ba_username';
const passwordInput = '#ba_password';
const loginButton = 'button[onclick="onLoginSubmit()"]';

class BasicAuthPage {

    typeUsername(username) {
        cy.get(usernameInput).click().type(username);
    }

    typePassword(password) {
        cy.get(passwordInput).click().type(password);
    }

    clickLoginButton() {
        cy.get(loginButton).click();
    }

    verifyLoginSuccess() {
        cy.contains('You are logged in!').should('be.visible');
    }
}

export default BasicAuthPage;