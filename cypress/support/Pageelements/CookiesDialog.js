import { automationmethods } from "../Pagebobjects/AutomationMethods";

class CookiesDialog {
    constructor(){
        this.acceptCookiesBtn="button[id='accept']";
    }

    acceptCookies(){
        automationmethods.click(this.acceptCookiesBtn)
    }

}
export const cookiesDialog = new CookiesDialog();