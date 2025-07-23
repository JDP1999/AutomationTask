import "cypress-real-events/support";
import {homepage} from '../../../support/Pagebobjects/Homepage'
import {servicespage} from '../../../support/Pagebobjects/Servicespage'
import {endtoendsolutionspage} from '../../../support/Pagebobjects/EndToEndSolutionsPage'
describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    homepage.loadHomepage();
    homepage.acceptCookies();
    homepage.hoverServicesButton();
    homepage.clickServicesButton();
    servicespage.clickEndtoEndSolutionsButton();
    endtoendsolutionspage.clickAutomation();
  })
})
