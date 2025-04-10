import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckSwedenLink',()=>{
    it('Checks the Sweden link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickSwedenLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })