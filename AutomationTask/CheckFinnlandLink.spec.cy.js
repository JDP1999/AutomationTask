import Homepage from '../Pagebobjects/Homepage'
describe('CheckFinnlandLink', () => {
    it('Checks the Finnland link', () => {
      const homepage = new Homepage();
      const country = 'be'
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.openBurgerMenue();
      homepage.clickGlobalLinksButton();
      homepage.clickFinnlandLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  
  })