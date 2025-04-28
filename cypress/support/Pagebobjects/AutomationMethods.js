class AutomationMethods{
    click(element){
        //Check if given element exists
        cy.get(element).should('exist')

        //Scroll element into view
        cy.get(element).scrollIntoView()

        //Check if given element is visible
        cy.get(element).should('be.visible')

        //Click given element
        cy.get(element).click({ force: true })
    }
    hover(element){
        //Check that the Services Button exists
        cy.get(element).should('exist')

        //Check that the Services Button is visible
        cy.get(element).should('be.visible')

        //Hover over Services Button
        cy.get(element).realHover()
    }
    sendText(element,text){
        //Check if first name exists
        cy.get(element).should('exist')

        //Check if first name is visible
        cy.get(element).should('be.visible')

        //Write random first name with faker
        cy.get(element).type(text, {force:true})
    }
    slide(element){
        //Check if slider exists
        cy.get(element).should('exist')

        //Check if slider is visible
        cy.get(element).should('be.visible')

        //Slide to the left
        cy.get(element).realMouseDown().realMouseMove(280,0).realMouseUp()
    }

}
export default AutomationMethods