class ContactPage {
    enterFirstname() {
        var firstname;
        cy.readFile('cypress/e2e/integration/Testdata/Firstname.txt', { encoding: "utf-8" }).then(($txt) => {
            firstname = $txt
            cy.log(firstname)
            cy.get('input[placeholder="First name"]').should('be.visible')
            cy.get('input[placeholder="First name"]').type(firstname, { force: true })
        })
    }
    enterLastname() {
        var lastname;
        cy.readFile('cypress/e2e/integration/Testdata/Lastname.txt', { encoding: "utf-8" }).then(($txt) => {
            lastname = $txt
            cy.log(lastname)
            cy.get('input[placeholder="Last name"]').should('be.visible')
            cy.get('input[placeholder="Last name"]').type(lastname, { force: true })
        })
    }
    enterEmail() {
        var mail;
        cy.readFile('cypress/e2e/integration/Testdata/Mail.txt', { encoding: "utf-8" }).then(($txt) => {
            mail = $txt
            cy.log(mail)
            cy.get('input[placeholder="E-mail address"]').should('be.visible')
            cy.get('input[placeholder="E-mail address"]').type(mail, { force: true })
        })
    }
    enterMobilenumber() {
        var mobile;
        cy.readFile('cypress/e2e/integration/Testdata/Phonenumber.txt', { encoding: "utf-8" }).then(($txt) => {
            mobile = $txt
            cy.log(mobile)
            cy.get('input[placeholder="Phone number"]').should('be.visible')
            cy.get('input[placeholder="Phone number"]').type(mobile, { force: true })
        })
    }
    enterMessage() {
        cy.get('textarea[placeholder="Your Message"]').should('be.visible')
        cy.get('textarea[placeholder="Your Message"]').type('Test Message', { force: true })
    }

}
export default ContactPage