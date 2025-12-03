import { servicespage } from '../../../support/Pagebobjects/Servicespage'
import { endtoendsolutionspage } from '../../../support/Pagebobjects/EndToEndSolutionsPage'
import { automationmethods } from "../../../support/Pagebobjects/AutomationMethods";
import { cookiesDialog } from '../../../support/Pageelements/CookiesDialog'
import { header } from '../../../support/Pageelements/Header'
import { redirectbutton } from '../../../support/Pageelements/RedirectButton';
import { popupdialog } from '../../../support/Pageelements/PopupDialog';

describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    automationmethods.loadPage('/')
    automationmethods.verifyPageLoaded('/')
    popupdialog.clickCloseButton();
    redirectbutton.clickRedirectButton();
    cookiesDialog.acceptCookies();
    header.hoverButton();
    header.verifyButtonHovered();
    header.clickServicesButton();
    header.verifyNewUrlLoaded();
    servicespage.clickEndtoEndSolutionsButton();
    endtoendsolutionspage.clickAutomation();
    endtoendsolutionspage.verifyPageLoaded();
  })
})
