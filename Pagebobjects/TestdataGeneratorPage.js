class TestdataGeneratorPage{
    loadTestDataGeneratorPage(){
        cy.visit("https://randomwordgenerator.com/name.php")
        cy.url().should("include","https://randomwordgenerator.com/name.php")
    }
    storeTestdata(){
        const d = new Date()
        var date = d.toLocaleDateString('en-GB')
        date=date.replaceAll("/","")
        cy.get('span[class="support-sentence"]').then(($name)=>{
            const text = $name.text()
            const arr = text.split(" ")
            const dateNow = new Date
            cy.writeFile('cypress/e2e/integration/Testdata/Testdata.txt',arr[0]+"\r\n"+arr[1]+"\r\ndcptestuser+nonprod.automation"+date+"@gmail.com\r\n+49"+date)
            cy.writeFile('cypress/e2e/integration/Testdata/Firstname.txt',arr[0])
            cy.writeFile('cypress/e2e/integration/Testdata/Lastname.txt',arr[1])
            cy.writeFile('cypress/e2e/integration/Testdata/Mail.txt',"dcptestuser+nonprod.automation"+dateNow.getTime()+"@gmail.com")
            cy.writeFile('cypress/e2e/integration/Testdata/Phonenumber.txt',"0049"+dateNow.getTime())
        })
        var firstname;
        cy.readFile('cypress/e2e/integration/Testdata/Testdata.txt').then(($txt)=>{
            const arr = $txt.split("\\n")
            firstname=arr[0]
        })
        cy.log(firstname)
    }

}
export default TestdataGeneratorPage