import {automationmethods} from "./AutomationMethods";
class EndToEndSolutionsPage {

    //Selectors
    constructor(){
        this.AutomationBtn="a[href*='automation']>div>span";
    }

    //Methods
    clickAutomation() {
        //Click Automation
        automationmethods.click(this.AutomationBtn)

        //Check that the new URL is called
        cy.url().should('contain', 'next-gen-workplace-automation')
    }

}
export const endtoendsolutionspage = new EndToEndSolutionsPage();