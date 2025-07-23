import {automationmethods} from "./AutomationMethods";
class EndToEndSolutionsPage {
    clickAutomation() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Click Automation
            automationmethods.click(identifiers.AutomationBtn)

            //Check that the new URL is called
            cy.url().should('contain', 'next-gen-workplace-automation')
        })
    }

}
export const endtoendsolutionspage = new EndToEndSolutionsPage();