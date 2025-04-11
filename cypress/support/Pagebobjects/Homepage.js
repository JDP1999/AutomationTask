import "cypress-real-events/support";
class Homepage {
    loadHomepage() {
        //Call the Sogeti Side
        cy.visit('/')

        //Check if the Sogeti Side is called
        cy.url().should('include', 'https://www.sogeti.com/')
    }
    acceptCookies() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Check if the Accept Cookies Button exists
            cy.get(identifiers.acceptCookies).should('exist')

            //Check if the Accept Cookies Button is visible
            cy.get(identifiers.acceptCookies).should('be.visible')

            //Click the Accept Cookies Button
            cy.get(identifiers.acceptCookies).click({ force: true })

            cy.wait(10000)
        })

    }
    hoverServicesButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Check that the Services Button exists
            cy.get(identifiers.ServicesBtn).should('exist')

            //Check that the Services Button is visible
            cy.get(identifiers.ServicesBtn).should('be.visible')

            //Check class before hover
            cy.get(identifiers.ServicesSubmenu).should('have.class', 't1-menu-li')

            //Hover over Services Button
            cy.get(identifiers.ServicesBtn).realHover();

            //Check class after hover
            cy.get(identifiers.ServicesSubmenu).should('have.class', 't1-menu-li active')
        })
    }
    clickServicesButton() {
        cy.fixture("identifiers.json").then((identifiers) => {
            //Check that the Services Button exists
            cy.get(identifiers.ServicesBtn).should('exist')

            //Check that the Services Button is visible
            cy.get(identifiers.ServicesBtn).should('be.visible')

            //Click the Services Button
            cy.get(identifiers.ServicesBtn).click({ force: true })

            //Check that the new url is called
            cy.url().should('contain', 'services')
        })
    }
    clickGlobalLinksButton() {
        //Check if the Global Links Button exists
        cy.fixture("identifiers.json").then((identifiers) =>{
            //Check if the Global Links Button exists
            cy.get(identifiers.GlobalLinksBtn).should('exist')

            //Check if the Global Links Button is visible
            cy.get(identifiers.GlobalLinksBtn).should('be.visible')

            //Click the Global Links Button
            cy.get(identifiers.GlobalLinksBtn).click()
        })
    }
    checkGlobalLinksButton() {
        cy.fixture("identifiers.json").then((identifiers)=>{
            //Check if the Global Links Button exists
            cy.get(identifiers.GlobalLinksBtn).should('exist')

            //Check if the Global Links Button is visible
            cy.get(identifiers.GlobalLinksBtn).should('be.visible')
        })
    }
    clickGlobalLinks() {
        var length,counter=0;
        cy.fixture('countries.json').then((countries)=>{
            //length=countries.countries.length
            for(counter in countries.countries){
                //Check if the Link for the specific country exists
                cy.get(countries.countries[counter].button).should('exist')

                //Check if the Link for the specific country is visible
                cy.get(countries.countries[counter].button).should('be.visible')

                //Click the Link for the specific country
                cy.get(countries.countries[counter].button).click()

                //Check if the new url is called
                cy.url().should('include', countries.countries[counter].newUrl)

                cy.go("back")

                cy.url().should('include','https://www.sogeti.com/')

                this.clickGlobalLinksButton()
            }
        })
    }
    clickContactUsButton() {
        //Check if the Contact Us Button exists
        cy.get('nav[class="header-nav"]>ul>li>a[href*="contact-us"]>span>span').should('exist')

        //Check if the Contact Us Button is visible
        cy.get('nav[class="header-nav"]>ul>li>a[href*="contact-us"]>span>span').should('be.visible')

        //Click the Contact Us Button
        cy.get('nav[class="header-nav"]>ul>li>a[href*="contact-us"]>span>span').click()

        //Check if the new url is called
        cy.url().should('include', 'contact-us')
    }

}
export default Homepage