import TestdataGeneratorPage from '../Pagebobjects/TestdataGeneratorPage'
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
describe('GenerateAddress', () => {
    it('Generates random address data', () => {
      const testdatagenerator = new TestdataGeneratorPage();
      testdatagenerator.loadTestDataGeneratorPage();
      testdatagenerator.storeTestdata();
    })
  })