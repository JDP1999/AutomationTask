import Homepage from '../Pagebobjects/Homepage'
describe('CheckSpainLink',()=>{
    it('Checks the Spain link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickSpainLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })