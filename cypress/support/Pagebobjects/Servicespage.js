import AutomationMethods from "./AutomationMethods";
const automation = new AutomationMethods()
class Servicespage {
    clickEndtoEndSolutionsButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Click EndToEndSolutions
            automation.click(identifiers.EndToEndSolutionsBtn)

            //Check that the new url is called
            cy.url().should('contain', 'end-to-end-solutions')
        })
    }

}
export default Servicespage