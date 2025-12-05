import { automationmethods } from "../Pagebobjects/AutomationMethods";

class PopupDialog{
    constructor(){
        this.PopupDialog="button[class='pum-close popmake-close']"
    }

    //Actions
    clickCloseButton(){
        automationmethods.clickIfElementPresent(this.PopupDialog)
    }
}
export const popupdialog = new PopupDialog()