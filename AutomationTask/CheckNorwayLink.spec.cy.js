import Homepage from '../Pagebobjects/Homepage'
describe('CheckNorwayLink',()=>{
    it('Checks the Norway link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickNorwayLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })