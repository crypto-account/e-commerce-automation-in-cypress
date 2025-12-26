const dragElement = '#column-a';
const dropTarget = '#column-b';

class DragAndDropPage {
  dragElementToTarget() {
    // Składnia: cy.get(źródło).drag(cel)
    cy.get(dragElement).drag(dropTarget);
  }
}

export default DragAndDropPage;