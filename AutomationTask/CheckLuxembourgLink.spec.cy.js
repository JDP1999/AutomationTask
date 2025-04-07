import Homepage from '../Pagebobjects/Homepage'
describe('CheckLuxembourgLink',()=>{
    it('Checks the Luxembourg link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickLuxembourgLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })