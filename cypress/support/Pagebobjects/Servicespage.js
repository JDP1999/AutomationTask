import {automationmethods} from "./AutomationMethods";
class Servicespage {

    //Selectors
    constructor(){
        this.EndToEndSolutionsBtn=".sogeti-button";
    }

    //Mathods

    //Actions
    clickEndtoEndSolutionsButton() {
        //Click EndToEndSolutions
        automationmethods.click(this.EndToEndSolutionsBtn)
    }

    //Verifications
    verifyPageLoaded(){
        //Check that the new url is called
        automationmethods.verifyPageLoaded('end-to-end-solutions')
    }

}
export const servicespage = new Servicespage();