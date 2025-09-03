import { automationmethods } from '../../../support/Pagebobjects/AutomationMethods'
import { cookiesDialog } from '../../../support/Pageelements/CookiesDialog'
import { globallinksmenue } from '../../../support/Pageelements/GlobalLinksMenue'
import { redirectbutton } from '../../../support/Pageelements/RedirectButton'
describe('CheckGlobalLink', () => {
    it('Asserts that the global links are working', () => {
      automationmethods.loadPage('/')
      automationmethods.verifyPageLoaded('/')
      redirectbutton.clickRedirectButton();
      cookiesDialog.acceptCookies();
      globallinksmenue.clickGlobalLinks();
    })
  })