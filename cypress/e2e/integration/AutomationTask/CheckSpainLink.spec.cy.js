import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckSpainLink',()=>{
    it('Checks the Spain link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickSpainLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })