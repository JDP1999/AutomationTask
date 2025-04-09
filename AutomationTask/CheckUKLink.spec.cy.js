import Homepage from '../Pagebobjects/Homepage'
describe('CheckUKLink',()=>{
    it('Checks the UK link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickUnitedKingdomLink();
      homepage.acceptCountriesCookies();
      homepage.checkLanguageIcon();
    })
  })