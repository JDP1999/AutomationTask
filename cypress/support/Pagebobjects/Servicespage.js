import {automationmethods} from "./AutomationMethods";
class Servicespage {

    //Selectors
    constructor(){
        this.EndToEndSolutionsBtn=".sogeti-button";
    }

    //Mathods
    clickEndtoEndSolutionsButton() {
        //Click EndToEndSolutions
        automationmethods.click(this.EndToEndSolutionsBtn)

        //Check that the new url is called
        automationmethods.verifyPageLoaded('end-to-end-solutions')
    }

}
export const servicespage = new Servicespage();