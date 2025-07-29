import "cypress-real-events/support";
import {homepage} from '../../../support/Pagebobjects/Homepage'
import {servicespage} from '../../../support/Pagebobjects/Servicespage'
import {endtoendsolutionspage} from '../../../support/Pagebobjects/EndToEndSolutionsPage'
import {cookiesDialog} from '../../../support/Pageelements/CookiesDialog'
import {header} from '../../../support/Pageelements/Header'
describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    homepage.loadHomepage();
    cookiesDialog.acceptCookies();
    header.hoverButton();
    header.clickServicesButton();
    servicespage.clickEndtoEndSolutionsButton();
    endtoendsolutionspage.clickAutomation();
  })
})
