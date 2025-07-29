import {homepage} from '../../../support/Pagebobjects/Homepage'
import {cookiesDialog} from '../../../support/Pageelements/CookiesDialog'
describe('CheckGlobalLink', () => {
    it('Asserts that the global links are working', () => {
      homepage.loadHomepage();
      cookiesDialog.acceptCookies();
      homepage.clickGlobalLinks();
    })
  })