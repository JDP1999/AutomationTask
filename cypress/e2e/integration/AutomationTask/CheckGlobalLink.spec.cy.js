import { automationmethods } from '../../../support/Pagebobjects/AutomationMethods'
import {cookiesDialog} from '../../../support/Pageelements/CookiesDialog'
import { globallinksmenue } from '../../../support/Pageelements/GlobalLinksMenue'
describe('CheckGlobalLink', () => {
    it('Asserts that the global links are working', () => {
      automationmethods.loadPage('/')
      cookiesDialog.acceptCookies();
      globallinksmenue.clickGlobalLinks();
    })
  })