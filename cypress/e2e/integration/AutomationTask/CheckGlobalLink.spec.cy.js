import {homepage} from '../../../support/Pagebobjects/Homepage'
describe('CheckGlobalLink', () => {
    it('Asserts that the global links are working', () => {
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinks();
    })
  })