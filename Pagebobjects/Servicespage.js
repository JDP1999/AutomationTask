class Servicespage {
    clickEndtoEndSolutionsButton() {
        cy.get('.sogeti-button').should('exist')
        cy.get('.sogeti-button').click({ force: true })
        cy.url().should('contain', 'end-to-end-solutions')
    }

}
export default Servicespage