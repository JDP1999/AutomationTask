import AutomationMethods from "./AutomationMethods";
const automation = new AutomationMethods()
class EndToEndSolutionsPage {
    clickAutomation() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Click Automation
            automation.click(identifiers.AutmationBtn)

            //Check that the new URL is called
            cy.url().should('contain', 'next-gen-workplace-automation')
        })
    }

}
export default EndToEndSolutionsPage