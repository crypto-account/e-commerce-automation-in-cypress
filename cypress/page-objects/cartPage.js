import { Product } from './homePage.js';

const productName = '.product-name';

const productRemove = 'a[class="remove"]';
const alertMessage = '.cart-empty.woocommerce-info';

class CartPage {

    verifyProductInCart() {
        cy.get(productName).should('contain', Product.HoodieWithZipper.Name);
    }

    removeProductFromCart() {
        cy.get(productRemove).click();
    }

    verifyCartIsEmpty() {
        cy.get(alertMessage).should('contain', 'Twój koszyk aktualnie jest pusty.');
    }
}

export default CartPage;