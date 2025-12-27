import HomePage from '../../page-objects/homePage';
import CartPage from '../../page-objects/cartPage';
import OrderPage from '../../page-objects/orderPage';


describe("E-commerce Automation - Order Process", () => {

        const homePage = new HomePage();
        const cartPage = new CartPage();
        const orderPage = new OrderPage();

    it("should complete an order successfully", () => {

        homePage.visitHomePage();
        homePage.addProductToCart();
        homePage.clickCheckCartFromProductLevel();
        cartPage.verifyProductInCart();
        cartPage.clickProceedToCheckout();
        orderPage.fillBillingDetails();
        orderPage.clickPlaceOrderButton();
        orderPage.verifyOrderPlaced();

       
    });

});
