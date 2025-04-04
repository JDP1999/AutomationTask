import Homepage from '../Pagebobjects/Homepage'
describe('CheckGermanyLink',()=>{
    it('Checks the Germany link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickGermanyLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })