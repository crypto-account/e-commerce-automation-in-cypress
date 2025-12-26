const firstNameInput = '#fname';
const lastNameInput = '#lname';
const submitButton = '#formSubmitButton'

class FormPage {  
    
    typeFirstName(firstName) {
        cy.get(firstNameInput).type(firstName);
    }

    typeLastName(lastName) {
        cy.get(lastNameInput).type(lastName);
    }      

    clickSubmitButton() {
        cy.get(submitButton).click();
    }

    verifyFormSubmissionSuccess() {
        cy.on('window:alert', (text) => {
            expect(text).to.contains('success');
        });
    }
}  

export default FormPage;

