import HomePage from "../../page-objects/homePage";
import CartPage from "../../page-objects/cartPage";

describe('Cart Page Tests', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();

    it('should add a product to the cart and verify it is in the cart', () => {
        homePage.visitHomePage();
        homePage.addProductToCart();
        homePage.clickCheckCartFromProductLevel();
        cartPage.verifyProductInCart();
        cartPage.removeProductFromCart();
        cartPage.verifyCartIsEmpty();

    });

});