import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckIrelandLink',()=>{
    it('Checks the Ireland link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickIrelandLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })