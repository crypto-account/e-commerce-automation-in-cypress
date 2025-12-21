const { fi } = require("@faker-js/faker");

describe('my first scenario', () => {   
   it('visit main page and click top menu button', () => {
      cy.visit('https://fabrykatestow.pl');
      cy.get('a').contains('Kursy').click();
      cy.get('.elementor-button-text').eq(3).click();
      cy.get('h1.elementor-heading-title').contains('Kto nauczy Cię testów automatycznych?').scrollIntoView();
      cy.wait(4000);
      cy.get('.elementor-element-4ee1fd56') .parent() .screenshot('profil-instruktora');
   });
});