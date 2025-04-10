import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckFinnlandLink', () => {
    it('Checks the Finnland link', () => {
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickFinnlandLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  
  })