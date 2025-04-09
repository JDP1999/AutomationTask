import Homepage from '../Pagebobjects/Homepage'
describe('CheckNorwayLink',()=>{
    it('Checks the Norway link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickNorwayLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })