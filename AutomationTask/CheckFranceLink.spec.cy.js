import Homepage from '../Pagebobjects/Homepage'
describe('CheckFranceLink', () => {
    it('Checks the France link', () => {
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickFranceLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })