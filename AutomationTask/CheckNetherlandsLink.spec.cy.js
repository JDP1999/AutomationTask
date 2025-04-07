import Homepage from '../Pagebobjects/Homepage'
describe('CheckNetherlandsLink',()=>{
    it('Checks the Netherlands link',()=>{
      const homepage = new Homepage();
      homepage.loadHomepage();
      homepage.acceptCookies();
      homepage.clickGlobalLinksButton();
      homepage.clickNetherlandsLink();
      homepage.checkGlobalLinksButton();
    })
  })