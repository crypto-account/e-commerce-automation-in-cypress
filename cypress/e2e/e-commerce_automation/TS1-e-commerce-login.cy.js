import HomePage from '../../page-objects/homePage';
import MyAccountPage from '../../page-objects/myAccountPage';
import { faker } from '@faker-js/faker';

describe("E-commerce Automation - Test Suite Login", () => {   

    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();

    beforeEach(() => {
        cy.visit('/');
     });

    before (function() {
        cy.fixture('users').as('userData');
    });


    it("should login to application", function() {
        
        myAccountPage.visitMyAccountPage();
        myAccountPage.enterEmail(this.userData.email);
        myAccountPage.enterPassword(this.userData.password);
        myAccountPage.clickLoginButton();
        myAccountPage.verifyMyAccountPage();

    }); 

    it("should not login with invalid credentials", () => {
        
        myAccountPage.visitMyAccountPage();
        myAccountPage.enterEmail(faker.internet.email());
        myAccountPage.enterPassword(faker.internet.password());
        myAccountPage.clickLoginButton();
        myAccountPage.verifyErrorMessage();
    });

}); 