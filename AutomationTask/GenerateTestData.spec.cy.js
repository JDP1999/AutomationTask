import TestdataGeneratorPage from '../Pagebobjects/TestdataGeneratorPage'
describe('GenerateAddress', () => {
    it('Generates random address data', () => {
      const testdatagenerator = new TestdataGeneratorPage();
      testdatagenerator.loadTestDataGeneratorPage();
      testdatagenerator.storeTestdata();
    })
  })