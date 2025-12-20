const { fi } = require("@faker-js/faker");

describe('my first scenario', () => {   
   it('visit main page and click top menu button', () => {
      cy.visit('https://fabrykatestow.pl');
      cy.get('a').contains('Kursy').click();
      cy.get('.elementor-button-text').eq(3).click();
      // cy.get('h1.elementor-heading-title').contains('Kto nauczy Cię testów automatycznych?').scrollIntoView().should('be.visible').screenshot();
      

      cy.get('h1.elementor-heading-title')
  .contains('Kto nauczy Cię testów automatycznych?')
  .scrollIntoView();

cy.wait(4000); // 0.5 sekundy zazwyczaj wystarczy, by animacja dobiegła końca

// Łapiemy główny kontener sekcji "Kto nauczy Cię testów..."
cy.get('.elementor-element-4ee1fd56') // To jest ID widgetu z nagłówkiem
  .parent() // Wychodzimy do wspólnego rodzica całej sekcji
  .screenshot('profil-instruktora');

// cy.get('h1.elementor-heading-title')
//   .contains('Kto nauczy Cię testów automatycznych?')
//   .screenshot('naglowek-stabilny');
      
   });
});