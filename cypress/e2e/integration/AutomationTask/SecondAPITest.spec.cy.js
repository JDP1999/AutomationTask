import ApiPage from '../../../support/Pagebobjects/ApiPage'
describe('SecondAPITest', ()=>{
    it('Checks the Api Response for different inputs',()=>{
        const apipage = new ApiPage();
        apipage.checkBeverlyHills();
        apipage.checkSchenectady();
        apipage.checkWaverley();
    })
})