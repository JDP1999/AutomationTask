import Homepage from '../Pagebobjects/Homepage'
import Servicespage from '../Pagebobjects/Servicespage'
import EndToEndSolutionsPage from '../Pagebobjects/EndToEndSolutionsPage'
describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    const homepage = new Homepage();
    const servicespage = new Servicespage();
    const endtoendsolutionspage = new EndToEndSolutionsPage();
    homepage.loadHomepage();
    homepage.acceptCookies();
    homepage.clickServicesButton();
    servicespage.clickEndtoEndSolutionsButton();
    endtoendsolutionspage.clickAutomation();
  })
})
