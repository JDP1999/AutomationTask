import "cypress-real-events/support";
import { fakerDE as faker } from '@faker-js/faker';
class ContactPage {
    enterFirstname() {
        //Check if first name exists
        cy.get('input[placeholder="First name"]').should('exist')

        //Check if first name is visible
        cy.get('input[placeholder="First name"]').should('be.visible')

        //Write random first name with faker
        cy.get('input[placeholder="First name"]').type(faker.person.firstName(), {force:true})
    }
    enterLastname() {
        //Check if the lastname exists
        cy.get('input[placeholder="Last name"]').should('exist')

        //Check if lastname is visible
        cy.get('input[placeholder="Last name"]').should('be.visible')

        //Type the value for lastname into the field
        cy.get('input[placeholder="Last name"]').type(faker.person.lastName(), {force:true})
    }
    enterEmail() {
        //Check if email exists
        cy.get('input[placeholder="E-mail address"]').should('exist')

        //Check if email is visible
        cy.get('input[placeholder="E-mail address"]').should('be.visible')

        //Type the value for email into the field
        cy.get('input[placeholder="E-mail address"]').type(faker.internet.email(), {force:true})
    }
    enterMobilenumber() {
        //Check if mobile exists
        cy.get('input[placeholder="Phone number"]').should('exist')

        //Check if mobile is visible
        cy.get('input[placeholder="Phone number"]').should('be.visible')

        //Type the value for mobile into the field
        cy.get('input[placeholder="Phone number"]').type(faker.phone.number(), {force:true})
    }
    enterMessage() {

        //Check if message exists
        cy.get('textarea[placeholder="Your Message"]').should('exist')


        //Check if message field is visible
        cy.get('textarea[placeholder="Your Message"]').should('be.visible')

        //Type the value for message into the field
        cy.get('textarea[placeholder="Your Message"]').type(faker.word.words(10), {force:true})
    }
    handleSlider(){
        //Check if slider exists
        cy.get('div[id="slider"]').should('exist')

        //Check if slider is visible
        cy.get('div[id="slider"]').should('be.visible')

        //Slide to the left
        cy.get('div[id="slider"]').realMouseDown().realMouseMove(280,0).realMouseUp()

        //Check Error Message displayed
        cy.get('div[class="mf_form__errors"]').should('be.visible')
        
    }
    checkCheckbox(){
        //Check if checkbox exists
        cy.get('input[type="checkbox"]').should('exist')

        //Check if checkbox is visible
        cy.get('input[type="checkbox"]').should('be.visible')

        //Check if checkbox is unchecked
        cy.get('input[type="checkbox"]').should('not.have.attr','data-gtm-form-interact-field-id')

        //Cick checkbox
        cy.get('input[type="checkbox"]').click()

        //Check if checkbox is checked
        cy.get('input[type="checkbox"]').should('have.attr','data-gtm-form-interact-field-id')
    }

}
export default ContactPage