import { faker } from "@faker-js/faker";


const firstNameInput = 'input[name="billing_first_name"]';
const lastNameInput = 'input[name="billing_last_name"]';
const emailInput = 'input[name="billing_email"]';
const addressInput = 'input[name="billing_address_1"]';
const cityInput = 'input[name="billing_city"]';
const postcodeInput = 'input[name="billing_postcode"]';
const phoneInput = 'input[name="billing_phone"]';
const placeOrderButton = 'button[id="place_order"]';

class OrderPage {
    fillBillingDetails() {
        cy.get(firstNameInput).type(faker.person.firstName());
        cy.get(lastNameInput).type(faker.person.lastName());
        cy.get(emailInput).type(faker.internet.email());
        cy.get(addressInput).type(faker.location.streetAddress());
        cy.get(cityInput).type(faker.location.city());
        cy.get(postcodeInput).type(faker.location.zipCode('##-###'));
        cy.get(phoneInput).type(faker.phone.number('+48#########'));
    }
    clickPlaceOrderButton() {
        cy.get(placeOrderButton).click({ force: true });
    }

    verifyOrderPlaced() {
        cy.contains('Zamówienie otrzymane', { timeout: 20000 }).should('be.visible');
    }
}

export default OrderPage;