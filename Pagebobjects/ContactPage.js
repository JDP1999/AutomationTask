import "cypress-real-events/support";
class ContactPage {
    enterFirstname() {
        //Initzialize variable for firstname
        var firstname;

        //Read the firstname file
        cy.readFile('cypress/e2e/integration/Testdata/Firstname.txt', { encoding: "utf-8" }).then(($txt) => {

            //Store the content into firstname
            firstname = $txt

            //CHeck if first name exists
            cy.get('input[placeholder="First name"]').should('exist')

            //Check if first name is visible
            cy.get('input[placeholder="First name"]').should('be.visible')

            cy.get('input[placeholder="First name"]').scrollIntoView()

            //Type the value for first name into the field
            cy.get('input[placeholder="First name"]').type(firstname, { force: true })
        })
    }
    enterLastname() {
        //Initzialize variable for lastname
        var lastname;

        //Read the last name file
        cy.readFile('cypress/e2e/integration/Testdata/Lastname.txt', { encoding: "utf-8" }).then(($txt) => {

            //Store the content into lastname
            lastname = $txt

            //Check if the lastname exists
            cy.get('input[placeholder="Last name"]').should('exist')

            //Check if lastname is visible
            cy.get('input[placeholder="Last name"]').should('be.visible')

            //Type the value for lastname into the field
            cy.get('input[placeholder="Last name"]').type(lastname, { force: true })
        })
    }
    enterEmail() {
        //Initzialize variable for email
        var mail;

        //Read the mail file
        cy.readFile('cypress/e2e/integration/Testdata/Mail.txt', { encoding: "utf-8" }).then(($txt) => {

            //Store the content into mail
            mail = $txt
            
            //Check if email exists
            cy.get('input[placeholder="E-mail address"]').should('exist')

            //Check if email is visible
            cy.get('input[placeholder="E-mail address"]').should('be.visible')

            //Type the value for email into the field
            cy.get('input[placeholder="E-mail address"]').type(mail, { force: true })
        })
    }
    enterMobilenumber() {
        //Initzialize variable for mobile
        var mobile;

        //Read the mobile file
        cy.readFile('cypress/e2e/integration/Testdata/Phonenumber.txt', { encoding: "utf-8" }).then(($txt) => {

            //Store the content into mobile
            mobile = $txt

            //Check if mobile exists
            cy.get('input[placeholder="Phone number"]').should('exist')

            //Check if mobile is visible
            cy.get('input[placeholder="Phone number"]').should('be.visible')

            //Type the value for mobile into the field
            cy.get('input[placeholder="Phone number"]').type(mobile, { force: true })
        })
    }
    enterMessage() {

        //Check if message exists
        cy.get('textarea[placeholder="Your Message"]').should('exist')


        //Check if message field is visible
        cy.get('textarea[placeholder="Your Message"]').should('be.visible')

        //Type the value for message into the field
        cy.get('textarea[placeholder="Your Message"]').type('Test Message', { force: true })
    }
    handleSlider(){
        //Check if slider exists
        cy.get('div[id="slider"]').should('exist')

        //Check if slider is visible
        cy.get('div[id="slider"]').should('be.visible')

        //Slide to the left
        cy.get('div[id="slider"]').realMouseDown().realMouseMove(280,0).realMouseUp()

        //Check Error Message displayed
        cy.get('.mf_form__errors').should('be.visible')
        
    }

}
export default ContactPage