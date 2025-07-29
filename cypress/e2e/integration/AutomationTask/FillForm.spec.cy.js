import "cypress-real-events/support";
import {homepage} from '../../../support/Pagebobjects/Homepage'
import {contactpage} from '../../../support/Pagebobjects/ContactPage'
import {cookiesDialog} from '../../../support/Pageelements/CookiesDialog'
import { contactusbutton } from "../../../support/Pageelements/ContactUsButton";
describe('FillForm', () => {
    it('Fills the form', () => {
      homepage.loadHomepage();
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