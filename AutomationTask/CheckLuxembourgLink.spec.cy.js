import Homepage from '../Pagebobjects/Homepage'
describe('CheckLuxembourgLink',()=>{
    it('Checks the Luxembourg link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickLuxembourgLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })