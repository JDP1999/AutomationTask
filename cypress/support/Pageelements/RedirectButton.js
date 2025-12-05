import { automationmethods } from "../Pagebobjects/AutomationMethods";

class RedirectButton{
    constructor(){
        this.RedirectButton="button[id='geoRedirectStayBtn']"
    }

    //Actions
    clickRedirectButton(){
        automationmethods.clickIfElementPresent(this.RedirectButton)
    }
}
export const redirectbutton = new RedirectButton()