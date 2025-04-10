import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckGlobalLink', () => {
    it('Checks the Belgium link', () => {
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickGlobalLinks();
    })
  })