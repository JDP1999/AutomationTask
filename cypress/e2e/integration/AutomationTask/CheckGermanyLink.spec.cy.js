import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckGermanyLink',()=>{
    it('Checks the Germany link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickGermanyLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })