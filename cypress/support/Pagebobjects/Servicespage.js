class Servicespage {
    clickEndtoEndSolutionsButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Check that the End To End Solutions Button exists
            cy.get(identifiers.EndToEndSolutionsBtn).should('exist')

            //Scroll the End to End Solutions Button into view
            cy.get(identifiers.EndToEndSolutionsBtn).scrollIntoView()

            //Check that the End To End Solutions Button is visible
            cy.get(identifiers.EndToEndSolutionsBtn).should('be.visible')

            //Click the End to End Solutions Button
            cy.get(identifiers.EndToEndSolutionsBtn).click({ force: true })

            //Check that the new url is called
            cy.url().should('contain', 'end-to-end-solutions')
        })
    }

}
export default Servicespage