import Homepage from '../Pagebobjects/Homepage'
describe('CheckSwedenLink',()=>{
    it('Checks the Sweden link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickSwedenLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })