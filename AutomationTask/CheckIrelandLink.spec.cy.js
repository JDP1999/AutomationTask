import Homepage from '../Pagebobjects/Homepage'
describe('CheckIrelandLink',()=>{
    it('Checks the Ireland link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.openBurgerMenue();
      homepage.clickGlobalLinksButton();
      homepage.clickIrelandLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })