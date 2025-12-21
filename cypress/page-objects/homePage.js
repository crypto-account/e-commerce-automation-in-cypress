import Urls from "./urls";

const inputsHeader = '#inputs-header';
const checkboxHeader = '#checkbox-header';
const dropdownListHeader = '#dropdownlist-header';
const hoversHeader = '#hovers-header';

class HomePage {

    visitHomePage() {
        const urls = new Urls();
        urls.visitHomePage();
    }

    clickInputsTab() {
        cy.get(inputsHeader).click();
    }

    clickCheckboxTab() {
        cy.get(checkboxHeader).click();
    }

    clickDropdownTab() {
        cy.get(dropdownListHeader).click();
    }

    clickHoversTab() {
        cy.get(hoversHeader).click();
    }
}

export default HomePage;