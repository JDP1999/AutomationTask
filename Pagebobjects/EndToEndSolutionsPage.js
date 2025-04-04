class EndToEndSolutionsPage {
    clickAutomation() {
        cy.get(':nth-child(4) > a > .community-url > .more2-link').should('exist')
        cy.get(':nth-child(4) > a > .community-url > .more2-link').click({ force: true })
        cy.url().should('contain', 'next-gen-workplace-automation')
    }

}
export default EndToEndSolutionsPage