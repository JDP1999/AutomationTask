import {automationmethods} from "./AutomationMethods";
class EndToEndSolutionsPage {

    //Selectors
    constructor(){
        this.AutomationBtn="a[href='https://www.sogeti.com/end-to-end-solutions/next-gen-workplace-automation/']>div>span";
    }

    //Methods

    //Actions
    clickAutomation() {
        //Scroll to the Bottom
        automationmethods.scrollToBottom()

        //Click Automation
        automationmethods.click(this.AutomationBtn)
    }

    //Verifications
    verifyPageLoaded(){
        //Check that the new URL is called
        automationmethods.verifyPageLoaded('next-gen-workplace-automation')
    }

}
export const endtoendsolutionspage = new EndToEndSolutionsPage();