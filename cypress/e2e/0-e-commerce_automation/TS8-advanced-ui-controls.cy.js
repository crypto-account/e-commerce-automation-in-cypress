import HomePage from "../../page-objects/homePage"
import DropdownListPage from "../../page-objects/dropdownListPage";
import HoversPage from "../../page-objects/hoversPage";
import DatepickerPage from "../../page-objects/datepickerPage";
import BasicAuthPage from "../../page-objects/basicAuthPage";
import FormPage from "../../page-objects/formPage";
import KeyPressPage from "../../page-objects/keyPressPage";
import DragDropPage from "../../page-objects/dragAndDropPage";
import AddRemoveElementsPage from "../../page-objects/addRemoveElementsPage";
import IFramePage from "../../page-objects/iFramePage";

describe("E-commerce Automation - Advanced UI Controls", () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it("should interact with dropdowns", () => {

        const homePage = new HomePage();
        homePage.clickDropdownTab();

        const dropdownListPage = new DropdownListPage();
        dropdownListPage.chooseDropdownListOption1();
        dropdownListPage.chooseDropdownListOption2;
    });

    it("should interact with hover elements", () => {

        const homePage = new HomePage();
        homePage.clickHoversTab();

        const hoversPage = new HoversPage();
        hoversPage.hoverOverFirstImageCaptionShouldBeVisible();
    });

    it("should interact with datepicker", () => {

        const homePage = new HomePage();
        homePage.clickDatepickerTab();

        const datepickerPage = new DatepickerPage();
        datepickerPage.typeData();

    });

    it("should interact with basic auth", () => {

        const homePage = new HomePage();
        homePage.clickBasicAuthTab();

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.typeUsername('admin');
        basicAuthPage.typePassword('admin');
        basicAuthPage.clickLoginButton();
        basicAuthPage.verifyLoginSuccess();

    });

    it("should interact with form", () => {

        const homePage = new HomePage();
        homePage.clickFormTab();

        const formPage = new FormPage();
        formPage.typeFirstName('John');
        formPage.typeLastName('Doe');
        formPage.clickSubmitButton();
        formPage.verifyFormSubmissionSuccess();

    });

    it("should interact with keypresses", () => {

        const homePage = new HomePage();
        homePage.clickKeypressesTab();

        const keyPressPage = new KeyPressPage();
        keyPressPage.typeKeyPress('{Enter}');
        keyPressPage.verifyKeyPressResult('You entered: ENTER');

    });

    it("should interact with drag and drop", () => {

        const homePage = new HomePage();
        homePage.clickDragAndDropTab();

        const dragAndDropPage = new DragDropPage();
        dragAndDropPage.dragElementToTarget();

    });

    it("should interact with add and remove elements", () => {

        const homePage = new HomePage();
        homePage.clickAddRemoveElementsTab();

        const addRemoveElementsPage = new AddRemoveElementsPage();
        addRemoveElementsPage.addElement();
        addRemoveElementsPage.removeElement();
    });

    it("should interact with iframe", () => {

        const homePage = new HomePage();
        homePage.clickIFrameTab();

        const iFramePage = new IFramePage();  
        iFramePage.clickButton1();
        iFramePage.verifyButtonClicked();

    });
});
