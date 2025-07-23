import "cypress-real-events/support";
import {homepage} from '../../../support/Pagebobjects/Homepage'
import {contactpage} from '../../../support/Pagebobjects/ContactPage'
describe('FillForm', () => {
    it('Fills the form', () => {
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickContactUsButton();
      contactpage.enterFirstname();
      contactpage.enterLastname();
      contactpage.enterEmail();
      contactpage.enterMobilenumber();
      contactpage.enterMessage();
      contactpage.checkCheckbox();
      contactpage.handleSlider();
    })
  })