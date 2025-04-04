import ApiPage from '../Pagebobjects/ApiPage'
describe('FirstAPITest', ()=>{
    it('Checks the Api Response for a Website',()=>{
        const apipage = new ApiPage();
        apipage.checkPage();
    })
})