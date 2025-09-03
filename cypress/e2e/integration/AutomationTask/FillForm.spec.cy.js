import {contactpage} from '../../../support/Pagebobjects/ContactPage'
import { automationmethods } from "../../../support/Pagebobjects/AutomationMethods";
import { cookiesDialog } from '../../../support/Pageelements/CookiesDialog'
import { contactusbutton } from "../../../support/Pageelements/ContactUsButton";
import { redirectbutton } from '../../../support/Pageelements/RedirectButton';
describe('FillForm', () => {
    it('Fills the form', () => {
      automationmethods.loadPage('/')
      automationmethods.verifyPageLoaded('/')
      redirectbutton.clickRedirectButton();
      cookiesDialog.acceptCookies();
      contactusbutton.clickContactUsButton();
      contactusbutton.verifyPageLoaded();
      contactpage.enterFirstname();
      contactpage.enterLastname();
      contactpage.enterEmail();
      contactpage.enterMobilenumber();
      contactpage.enterMessage();
      contactpage.verifyCheckboxUnchecked();
      contactpage.checkCheckbox();
      contactpage.verifyCheckboxChecked();
      contactpage.handleSlider();
      contactpage.verifyErrorMessageDisplayed();
    })
  })