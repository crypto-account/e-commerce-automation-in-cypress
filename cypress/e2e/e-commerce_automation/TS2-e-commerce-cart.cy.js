import HomePage from "../../page-objects/homePage";
import CartPage from "../../page-objects/cartPage";

describe('Cart Page Tests', () => {

    before (function() {
        cy.fixture('products').as('productData');
    });

    const homePage = new HomePage();
    const cartPage = new CartPage();

    it('should add a product to the cart and verify it is in the cart', function() {

        homePage.visitHomePage();
        homePage.addProductToCart(this.productData.polo.locator);
        homePage.clickCheckCartFromProductLevel();
        cartPage.verifyProductInCart(this.productData.polo.name);
        cartPage.removeProductFromCart();
        cartPage.verifyCartIsEmpty();

    });

});