class EndToEndSolutionsPage {
    clickAutomation() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Check that the Automation Link exists
            cy.get('a[href*="automation"]>div>span').should('exist')

            //Scroll the element into view
            cy.get('a[href*="automation"]>div>span').should('exist').scrollIntoView()

            //Check that the Automation Links is visible
            cy.get('a[href*="automation"]>div>span').should('be.visible')

            //Click the Automation Link
            cy.get('a[href*="automation"]>div>span').click({ force: true })

            //Check that the new URL is called
            cy.url().should('contain', 'next-gen-workplace-automation')
        })
    }

}
export default EndToEndSolutionsPage