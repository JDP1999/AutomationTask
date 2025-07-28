class AutomationMethods{
    click(element){
        //Check if the given element exists
        cy.get(element).should('exist')

        //Scroll the element into view
        cy.get(element).scrollIntoView()

        //Check if the given element is visible
        cy.get(element).should('be.visible')

        //Click the given element
        cy.get(element).click({ force: true })
    }
    hover(element){
        //Check that the element exists
        cy.get(element).should('exist')

        //Check that the element is visible
        cy.get(element).should('be.visible')

        //Hover over the element
        cy.get(element).trigger('mouseenter')
    }
    sendText(element,text){
        //Check if the element exists
        cy.get(element).should('exist')

        //Scroll the element into view
        cy.get(element).scrollIntoView()

        //Check if the element is visible
        cy.get(element).should('be.visible')

        //Write text into the element
        cy.get(element).type(text, {force:true})
    }
    slide(element){
        //Check if the element exists
        cy.get(element).should('exist')

        //Scroll the element into view
        cy.get(element).scrollIntoView()

        //Check if the element is visible
        cy.get(element).should('be.visible')

        //Slide to the left
        cy.get(element).trigger('mousedown')

        cy.get(element).trigger('mousemove',{clientX:1000,clientY:0})

        cy.get(element).trigger('mouseup')
    }

}
export const automationmethods = new AutomationMethods();