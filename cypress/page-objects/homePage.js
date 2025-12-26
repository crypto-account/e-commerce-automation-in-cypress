import Urls from "./urls";

const inputsHeader = '#inputs-header';
const checkboxHeader = '#checkbox-header';
const dropdownListHeader = '#dropdownlist-header';
const hoversHeader = '#hovers-header';
const datepickerHeader = '#datepicker-header';
const basicauthHeader = '#basicauth-header'
const formHeader = '#form-header'
const keypressesHeader = '#keypresses-header'
const draganddropHeader = '#draganddrop-header'
const addremoveelementsHeader = '#addremoveelements-header'
const iframeHeader = '#iframe-header'

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

    clickDatepickerTab() {
        cy.get(datepickerHeader).click();
    }

    clickBasicAuthTab() {
        cy.get(basicauthHeader).click();
    }

    clickFormTab() {
        cy.get(formHeader).click();
    }

    clickKeypressesTab() {
        cy.get(keypressesHeader).click();
    }

    clickDragAndDropTab() {
        cy.get(draganddropHeader).click();
    }

    clickAddRemoveElementsTab() {
        cy.get(addremoveelementsHeader).click();
    }

    clickIFrameTab() {
        cy.get(iframeHeader).click();
    }
}

export default HomePage;