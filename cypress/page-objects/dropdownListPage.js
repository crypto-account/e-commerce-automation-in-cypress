const dropdown = '#dropdown';

class DropdownListPage {

    chooseDropdownListOption1() {
        cy.get(dropdown).select('Option 1').should('have.value', '1');
    }

    chooseDropdownListOption2() {
        cy.get(dropdown).select('Option 2').should('have.value', '2');
    }
}

export default DropdownListPage;