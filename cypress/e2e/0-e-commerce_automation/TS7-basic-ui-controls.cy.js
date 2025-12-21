import HomePage from '../../page-objects/homePage';
import InputPage from '../../page-objects/inputPage';
import CheckboxPage from '../../page-objects/checkboxPage';

describe("E-commerce Automation - Basic UI Controls", () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it("should interact with input fields", () => {

        const homePage = new HomePage();
        homePage.clickInputsTab();
        
        const inputPage = new InputPage();
        inputPage.enterNumber();
        inputPage.enterLetters();
    });

    it("should interact with checkboxes", () => {

        const homePage = new HomePage();
        homePage.clickCheckboxTab();
        
        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox();
        checkboxPage.uncheckLastCheckbox();
    });
});