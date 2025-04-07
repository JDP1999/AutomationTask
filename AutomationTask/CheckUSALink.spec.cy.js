import Homepage from '../Pagebobjects/Homepage'
describe('CheckUSALink',()=>{
    it('Checks the USA link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickUnitedStatesLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })