class AutomationMethods{

    //Action
    scrollElementIntoView(element){
        //Scroll the element into view
        cy.get(element).scrollIntoView()
    }

    click(element){
        //Prepare for interaction with element
        automationmethods.prepareforAction(element)
        //Click the given element
        cy.get(element).click({ force: true })
    }

    hover(element){
        //Prepare for interaction with element
        automationmethods.prepareforAction(element)
        //Hover over the element
        cy.get(element).trigger('mouseenter')
    }

    sendText(element,text){
        //Prepare for interaction with element
        automationmethods.prepareforAction(element)
        //Write text into the element
        cy.get(element).type(text, {force:true})
    }

    slide(element){
        //Prepare for interaction with element
        automationmethods.prepareforAction(element)
        //Slide to the left
        cy.get(element).trigger('mousedown')

        cy.get(element).trigger('mousemove',{clientX:1000,clientY:0})

        cy.get(element).trigger('mouseup')
    }

    loadPage(url){
        //Call the Sogeti Side
        cy.visit(url)

        //Wait for the page to be loaded
        cy.wait(8000)
    }

    goBack(){
        cy.go("back")
    }

    scrollToBottom(){
        cy.scrollTo('bottom')
    }

    prepareforAction(element){
        automationmethods.checkElementExists(element)
        automationmethods.checkElementVisible(element)
        automationmethods.scrollElementIntoView(element)
    }

    //Verification
    checkElementExists(element){
        //Check if the given element exists
        cy.get(element).should('exist')
    }

    checkElementVisible(element){
        //Check if the given element is visible
        cy.get(element).should('be.visible')
    }
    verifyPageLoaded(url){
        //Check if the Sogeti Side is called
        cy.url().should('include', url)
    }

}
export const automationmethods = new AutomationMethods();