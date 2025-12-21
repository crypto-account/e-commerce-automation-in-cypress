import HomePage from "../../page-objects/homePage"
import DropdownListPage from "../../page-objects/dropdownListPage";
import HoversPage from "../../page-objects/hoversPage";

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
        // hoversPage.hoverOverFirstImage();
        hoversPage.hoverOverFirstImageCaptionShouldBeVisible();
    });





});;

