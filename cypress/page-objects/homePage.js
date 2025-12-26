import Urls from "./urls";

const myAccountHeader = '#menu-item-100';
const productNewBlock = 'div[data-block-name="woocommerce/product-new"]';
const checkCartFromProductLevel  = '.added_to_cart.wc-forward'

export const Product = {
    HoodieWithZipper:{
        Locator: 'a[data-product_id="51"]'  ,
        Name: 'Hoodie with Zipper',
    },
    Polo:{
        Locator: 'a[data-product_id="49"]'  ,
        Name: 'Polo',
    },
    Sunglasses:{
        Locator: 'a[data-product_id="53"]'  ,
        Name: 'Sunglasses',
    }
}



const inputsHeader = '#inputs-header';
const checkboxHeader = '#checkbox-header';
const dropdownListHeader = '#dropdownlist-header';
const hoversHeader = '#hovers-header';
const datepickerHeader = '#datepicker-header';
const basicauthHeader = '#basicauth-header';
const formHeader = '#form-header';
const keypressesHeader = '#keypresses-header';
const draganddropHeader = '#draganddrop-header';
const addremoveelementsHeader = '#addremoveelements-header';
const iframeHeader = '#iframe-header';


class HomePage {

    clickMyAccountTab() {
        cy.get(myAccountHeader).click();
    }

    addProductToCart() {
        cy.get(productNewBlock).within(() => {
            cy.get(Product.HoodieWithZipper.Locator).click();
        });
    }

    clickCheckCartFromProductLevel() {
        cy.get(productNewBlock).within(() => {
            cy.get(checkCartFromProductLevel).click();
        });
    }


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