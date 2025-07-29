import { automationmethods } from "../Pagebobjects/AutomationMethods";

class ContactUsButton {
    constructor(){
        this.ContactUsButton="nav[class='header-nav']>ul>li>a[href*='contact-us']>span>span"
    }

    clickContactUsButton(){
        automationmethods.click(this.ContactUsButton)
    }
}
export const contactusbutton = new ContactUsButton()