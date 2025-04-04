import Homepage from '../Pagebobjects/Homepage'
describe('CheckUSALink',()=>{
    it('Checks the USA link',()=>{
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.changeViewPort();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.openBurgerMenue();
      homepage.clickGlobalLinksButton();
      homepage.clickUnitedStatesLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })