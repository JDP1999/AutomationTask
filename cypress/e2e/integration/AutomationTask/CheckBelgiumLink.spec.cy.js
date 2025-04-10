import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckBelgiumLink', () => {
    it('Checks the Belgium link', () => {
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickBelgiumLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })