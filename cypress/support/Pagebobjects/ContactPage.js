import "cypress-real-events/support";
import { fakerDE as faker } from '@faker-js/faker';
import {automationmethods} from "./AutomationMethods"

class ContactPage {
    enterFirstname() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Type firstname into the textfield using the data from faker
            automationmethods.sendText(identifiers.Firstname,faker.person.firstName())
        })
    }
    enterLastname() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Type lastname into the textfield using the data from faker
            automationmethods.sendText(identifiers.Lastname,faker.person.lastName())
        })
    }
    enterEmail() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Type email into the textfield using the data from faker
            automationmethods.sendText(identifiers.Email,faker.internet.email())
        })
    }
    enterMobilenumber() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Type mobile into the textfield using the data from faker
            automationmethods.sendText(identifiers.Mobile,faker.phone.number())
        })
    }
    enterMessage() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Type text into the textfield using the data from faker
            automationmethods.sendText(identifiers.Message,faker.word.words(10))
        })
    }
    handleSlider(){
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Use the slider to submit the form
            automationmethods.slide(identifiers.Slider)

            //Check Error Message displayed
            cy.get(identifiers.ErrorMessage).should('be.visible')
        })
    }
    checkCheckbox(){
        cy.fixture("identifiers.json").then((identifiers) => {
            //Check if checkbox is unchecked
            cy.get(identifiers.Checkbox).should('not.have.attr', 'data-gtm-form-interact-field-id') 
            
            //Click Checkbox
            automationmethods.click(identifiers.Checkbox)

            //Check if checkbox is checked
            cy.get(identifiers.Checkbox).should('have.attr', 'data-gtm-form-interact-field-id')
        })
    }

}
export const contactpage = new ContactPage();