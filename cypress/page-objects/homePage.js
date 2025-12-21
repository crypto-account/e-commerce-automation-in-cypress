import Urls from "./urls";

const inputsHeader = '#inputs-header';
const checkboxHeader = '#checkbox-header';

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
}

export default HomePage;