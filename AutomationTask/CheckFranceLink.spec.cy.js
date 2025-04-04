import Homepage from '../Pagebobjects/Homepage'
describe('CheckFranceLink', () => {
    it('Checks the France link', () => {
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.openBurgerMenue();
      homepage.clickGlobalLinksButton();
      homepage.clickFranceLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })