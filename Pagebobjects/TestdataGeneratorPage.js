class TestdataGeneratorPage{
    loadTestDataGeneratorPage(){
        //Calls the website
        cy.visit("https://randomwordgenerator.com/name.php")

        //Checks if the website is called
        cy.url().should("include","https://randomwordgenerator.com/name.php")
    }
    storeTestdata(){
        //Checks if the name exists
        cy.get('span[class="support-sentence"]').should('exist')

        //Checks if the name is visible
        cy.get('span[class="support-sentence"]').should('be.visible')

        //Get the name
        cy.get('span[class="support-sentence"]').then(($name)=>{

            //Store the name into a variable
            const text = $name.text()

            //Create an array bs splitting the name string by the space
            const arr = text.split(" ")

            //Create a new Date Object for the Timestamp
            const dateNow = new Date

            //Write Firstname into file
            cy.writeFile('cypress/e2e/integration/Testdata/Firstname.txt',arr[0])

            //Write Lastname into file
            cy.writeFile('cypress/e2e/integration/Testdata/Lastname.txt',arr[1])

            //Write Mail into file
            cy.writeFile('cypress/e2e/integration/Testdata/Mail.txt',"dcptestuser+nonprod.automation"+dateNow.getTime()+"@gmail.com")

            //Write Mobilenumber into file
            cy.writeFile('cypress/e2e/integration/Testdata/Phonenumber.txt',"0049"+dateNow.getTime())
        })
    }

}
export default TestdataGeneratorPage