class Servicespage {
    clickEndtoEndSolutionsButton() {

        //Check that the End To End Solutions Button exists
        cy.get('a[aria-label="Explore about End-to-end Solutions"]').should('exist')

        //Scroll the End to End Solutions Button into view
        cy.get('a[aria-label="Explore about End-to-end Solutions"]').scrollIntoView()

        //Check that the End To End Solutions Button is visible
        cy.get('a[aria-label="Explore about End-to-end Solutions"]').should('be.visible')

        //Click the End to End Solutions Button
        cy.get('a[aria-label="Explore about End-to-end Solutions"]').click({ force: true })

        //Check that the new url is called
        cy.url().should('contain', 'end-to-end-solutions')
    }

}
export default Servicespage