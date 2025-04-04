import Homepage from '../Pagebobjects/Homepage'
describe('CheckBelgiumLink', () => {
    it('Checks the Belgium link', () => {
      const homepage = new Homepage();
      Cypress.on('uncaught:exception', () => { return false })
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickBelgiumLink();
      homepage.acceptCountriesCookies();
      homepage.checkGlobalLinksButton();
    })
  })