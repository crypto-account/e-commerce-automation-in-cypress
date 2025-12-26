const  datepickerInput = '#start';

class DatepickerPage {

    typeData() {
        cy.get(datepickerInput).click().type('2000-01-01').should('have.value', '2000-01-01');
    }

}

export default DatepickerPage;