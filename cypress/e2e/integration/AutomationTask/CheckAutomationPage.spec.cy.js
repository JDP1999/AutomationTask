import "cypress-real-events/support";
import Homepage from '../../../support/Pagebobjects/Homepage'
import Servicespage from '../../../support/Pagebobjects/Servicespage'
import EndToEndSolutionsPage from '../../../support/Pagebobjects/EndToEndSolutionsPage'
describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    const homepage = new Homepage();
    const servicespage = new Servicespage();
    const endtoendsolutionspage = new EndToEndSolutionsPage();
    homepage.loadHomepage();
    homepage.acceptCookies();
    homepage.hoverServicesButton();
    homepage.clickServicesButton();
    servicespage.clickEndtoEndSolutionsButton();
    endtoendsolutionspage.clickAutomation();
  })
})
