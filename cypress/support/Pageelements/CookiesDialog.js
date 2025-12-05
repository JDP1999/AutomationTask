import { automationmethods } from "../Pagebobjects/AutomationMethods";

class CookiesDialog {
    constructor(){
        this.acceptCookiesBtn="button[id='accept']";
    }

    //Actions
    acceptCookies(){
        automationmethods.clickIfElementPresent(this.acceptCookiesBtn)
    }

}
export const cookiesDialog = new CookiesDialog();