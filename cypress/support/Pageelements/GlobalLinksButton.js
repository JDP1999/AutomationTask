import { automationmethods } from "../Pagebobjects/AutomationMethods";

class GlobalLinksButton{
    constructor(){
        this.GlobalLinksBtn = "span:has(> i[aria-label='Select Country Website'])";
    }

    clickGlobalLinksButton() {
        //Click Global Links Button
        automationmethods.click(this.GlobalLinksBtn)
    }
}
export const globallinksbutton = new GlobalLinksButton();