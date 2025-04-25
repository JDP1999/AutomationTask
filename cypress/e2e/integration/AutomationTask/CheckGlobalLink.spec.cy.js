import Homepage from '../../../support/Pagebobjects/Homepage'
describe('CheckGlobalLink', () => {
    it('Asserts that the global links are working', () => {
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinks();
    })
  })