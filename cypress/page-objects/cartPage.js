import { Product } from './homePage.js';

const productName = 'td[class="product-name"]';
const productRemove = 'a[class="remove"]';
const alertMessage = '.cart-empty.woocommerce-info';
const proceedToCheckoutButton = 'div[class="wc-proceed-to-checkout"]';

class CartPage {

    verifyProductInCart(product) {
        cy.get(productName).should('contain', product);
    }

    removeProductFromCart() {
        cy.get(productRemove).click();
    }

    verifyCartIsEmpty() {
        cy.get(alertMessage).should('contain', 'Twój koszyk aktualnie jest pusty.');
    }
    
    clickProceedToCheckout() {
        cy.get(proceedToCheckoutButton).click();
    }

}

export default CartPage;