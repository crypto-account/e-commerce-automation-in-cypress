const figure = '.figure';
const figcaption = '.figcaption';

class HoversPage {

    // hoverOverFirstImage() {
    //     cy.get(figure).first().trigger('mouseover');
    // }

    hoverOverFirstImageCaptionShouldBeVisible() {
        cy.get(figure).first().find(figcaption).should('be.hidden').invoke('show').should('be.visible') ;
    }

}

export default HoversPage;