import {automationmethods} from "./AutomationMethods";
class Servicespage {
    clickEndtoEndSolutionsButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Click EndToEndSolutions
            automationmethods.click(identifiers.EndToEndSolutionsBtn)

            //Check that the new url is called
            cy.url().should('contain', 'end-to-end-solutions')
        })
    }

}
export const servicespage = new Servicespage();