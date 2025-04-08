import "cypress-real-events/support";
import Homepage from '../Pagebobjects/Homepage'
import ContactPage from '../Pagebobjects/ContactPage'
describe('FillForm', () => {
    it('Fills the form', () => {
      const homepage = new Homepage();
      const contactpage = new ContactPage();
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