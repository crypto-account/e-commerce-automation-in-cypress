import HomePage from '../../page-objects/homePage';
import CartPage from '../../page-objects/cartPage';
import OrderPage from '../../page-objects/orderPage';


describe("E-commerce Automation - Order Process", () => {

    before (function() {
        cy.fixture('products').as('productData');
    });

        const homePage = new HomePage();
        const cartPage = new CartPage();
        const orderPage = new OrderPage();

    it("should complete an order successfully", function() {

        homePage.visitHomePage();
        homePage.addProductToCart(this.productData.polo.locator);
        homePage.clickCheckCartFromProductLevel();
        cartPage.verifyProductInCart(this.productData.polo.name);
        cartPage.clickProceedToCheckout();
        orderPage.fillBillingDetails();
        orderPage.clickPlaceOrderButton();
        orderPage.verifyOrderPlaced();

    });

});
