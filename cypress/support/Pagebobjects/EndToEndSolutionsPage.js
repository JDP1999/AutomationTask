import {automationmethods} from "./AutomationMethods";
class EndToEndSolutionsPage {

    //Selectors
    constructor(){
        this.AutomationBtn=":nth-child(4) > a > .community-url > .title-list > .service-description";
    }

    //Methods
    clickAutomation() {
        //Click Automation
        automationmethods.click(this.AutomationBtn)

        //Check that the new URL is called
        automationmethods.verifyPageLoaded('next-gen-workplace-automation')
    }

}
export const endtoendsolutionspage = new EndToEndSolutionsPage();