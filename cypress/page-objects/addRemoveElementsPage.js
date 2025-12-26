
const addElementButton = 'button[onclick="addElement()"]';
const removeElementButton = 'button[class="added-manually"]';

class AddRemoveElementsPage {     
    addElement() {
        cy.get(addElementButton).click();
    }

    removeElement() {
        cy.get(removeElementButton).click();
    }   
    verifyElementRemoved() {
        cy.get(removeElementButton).should('not.exist');
    }
}  

export default AddRemoveElementsPage;