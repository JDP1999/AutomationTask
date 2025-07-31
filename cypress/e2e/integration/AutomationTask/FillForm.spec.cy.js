import {contactpage} from '../../../support/Pagebobjects/ContactPage'
import { automationmethods } from "../../../support/Pagebobjects/AutomationMethods";
import {cookiesDialog} from '../../../support/Pageelements/CookiesDialog'
import { contactusbutton } from "../../../support/Pageelements/ContactUsButton";
describe('FillForm', () => {
    it('Fills the form', () => {
      automationmethods.loadPage('/')
      cookiesDialog.acceptCookies();
      contactusbutton.clickContactUsButton();
      contactpage.enterFirstname();
      contactpage.enterLastname();
      contactpage.enterEmail();
      contactpage.enterMobilenumber();
      contactpage.enterMessage();
      contactpage.checkCheckbox();
      contactpage.handleSlider();
    })
  })