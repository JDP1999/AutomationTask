import {servicespage} from '../../../support/Pagebobjects/Servicespage'
import {endtoendsolutionspage} from '../../../support/Pagebobjects/EndToEndSolutionsPage'
import { automationmethods } from "../../../support/Pagebobjects/AutomationMethods";
import {cookiesDialog} from '../../../support/Pageelements/CookiesDialog'
import {header} from '../../../support/Pageelements/Header'
describe('CheckAutomationPage', () => {
  it('Clicks Links on the Sogeti side', () => {
    automationmethods.loadPage('/')
    automationmethods.verifyPageLoaded('/')
    cookiesDialog.acceptCookies();
    header.hoverButton();
    header.clickServicesButton();
    servicespage.clickEndtoEndSolutionsButton();
    endtoendsolutionspage.clickAutomation();
  })
})
