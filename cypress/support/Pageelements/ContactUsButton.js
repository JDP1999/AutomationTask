import { automationmethods } from "../Pagebobjects/AutomationMethods";

class ContactUsButton {
    constructor(){
        this.ContactUsButton="nav[class='header-nav']>ul>li>a[href*='contact-us']>span>span"
    }

    //Actions
    clickContactUsButton(){
        automationmethods.click(this.ContactUsButton)
    }

    //Verifications
    verifyPageLoaded(){
        automationmethods.verifyPageLoaded('contact-us')
    }
}
export const contactusbutton = new ContactUsButton()