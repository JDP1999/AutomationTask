import Homepage from '../Pagebobjects/Homepage'
describe('CheckUKLink',()=>{
    it('Checks the UK link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickUnitedKingdomLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })