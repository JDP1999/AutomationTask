import Homepage from '../Pagebobjects/Homepage'
describe('CheckNetherlandsLink',()=>{
    it('Checks the Netherlands link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickNetherlandsLink();
      homepage.checkGlobalLinksButton();
    })
  })