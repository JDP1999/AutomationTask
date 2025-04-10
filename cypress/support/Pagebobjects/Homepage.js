import "cypress-real-events/support";
class Homepage {
    loadHomepage(){
        //Adjust the viewport
        cy.viewport(1300, 1200)

        //Call the Sogeti Side
        cy.visit('https://www.sogeti.com/')

        //Check if the Sogeti Side is called
        cy.url().should('include','https://www.sogeti.com/')

        cy.get('nav[aria-label="Services SubMenu"]').should('exist')
    }
    acceptCookies(){
        //Check if the Accept Cookies Button exists
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').should('exist')

        //Check if the Accept Cookies Button is visible
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').should('be.visible')

        //Click the Accept Cookies Button
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click({ force: true })

    }

    hoverServicesButton(){
        //Check that the Services Button exists
        cy.get('nav[class="header-nav"]>ul>li>a[href*="services"]').should('exist')

        //Check that the Services Button is visible
        cy.get('nav[class="header-nav"]>ul>li>a[href*="services"]').should('be.visible')

        //Check class before hover
        cy.get('nav[class="header-nav"]>ul>li[aria-label="Services Submenu"]').should('have.class','t1-menu-li')

        //Hover over Services Button
        cy.get('nav[class="header-nav"]>ul>li>a[href*="services"]').realHover();

        //Check class after hover
        cy.get('nav[class="header-nav"]>ul>li[aria-label="Services Submenu"]').should('have.class','t1-menu-li active')
    }

    clickServicesButton(){
        //Check that the Services Button exists
        cy.get('nav[class="header-nav"]>ul>li>a[href*="services"]').should('exist')

        //Check that the Services Button is visible
        cy.get('nav[class="header-nav"]>ul>li>a[href*="services"]').should('be.visible')

        //Click the Services Button
        cy.get('nav[class="header-nav"]>ul>li>a[href*="services"]').click({ force: true })
        
        //Check that the new url is called
        cy.url().should('contain', 'services')
    }
    clickGlobalLinksButton(){
        //Check if the Global Links Button exists
        cy.get('.header-lang-open > a > .outer > .inner').should('exist')

        //Check if the Global Links Button is visible
        cy.get('.header-lang-open > a > .outer > .inner').should('be.visible')

        //Click the Global Links Button
        cy.get('.header-lang-open > a > .outer > .inner').click()
    }
    checkGlobalLinksButton(){
        //Check if the Global Links Button exists
        cy.get('.header-lang-open > a > .outer > .inner').should('exist')

        //Check if the Global Links Button is visible
        cy.get('.header-lang-open > a > .outer > .inner').should('be.visible')
    }
    clickGlobalLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.com"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.com"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.com"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.com/')
    }
    clickBelgiumLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.be"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.be"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.be"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.be/')
    }
    checkLanguageIcon() {
        //Check if the Language Icon exists
        cy.get('.language-icon').should('exist')

        //Check if the Language Icon is visible
        cy.get('.language-icon').should('be.visible')
    }
    acceptCountriesCookies(){
        //Check if the Accept Cookies Button exists
        cy.get('button[class*="accept"]').should('exist')

        //Check if the Accept Cookies Button is visible
        cy.get('button[class*="accept"]').should('be.visible')

        //Click the Accept Cookies Button
        cy.get('button[class*="accept"]').click()
    }
    clickFinnlandLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.fi"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.fi"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.fi"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.fi/')
    }
    clickFranceLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.fr.sogeti.com"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.fr.sogeti.com"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.fr.sogeti.com"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.fr.sogeti.com/')
    }
    clickGermanyLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.de"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.de"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.de"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.de/')
    }
    clickIrelandLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.ie"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.ie"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.ie"]').click().first

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.ie/')
    }
    clickLuxembourgLink(){
        //Check if the Link for the specific country is exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.lu"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.lu"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.lu"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.lu/')
    }
    clickNorwayLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.no"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.no"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.no"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.no/')
    }
    clickNetherlandsLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.nl"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.nl"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.nl"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.nl/')
    }
    clickSpainLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.es"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.es"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.es"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.es/')
    }
    clickSwedenLink(){
        //Check if the Link for the specific country is exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.se"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.se"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.sogeti.se"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.se/')
    }
    clickUnitedKingdomLink(){
        //Check if the Link for the specific country exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.uk.sogeti.com"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.uk.sogeti.com"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.uk.sogeti.com"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.uk/')
    }
    clickUnitedStatesLink(){
        //Check if the Link for the specific country is exists
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.us.sogeti.com"]').should('exist')

        //Check if the Link for the specific country is visible
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.us.sogeti.com"]').should('be.visible')

        //Click the Link for the specific country
        cy.get('ul[id="menu-location-menu"]>li>a[href*="www.us.sogeti.com"]').click()

        //Check if the new url is called
        cy.url().should('include', 'https://www.sogeti.us/')
    }
    clickContactUsButton(){
        //Check if the Contact Us Button exists
        cy.get('nav[class="header-nav"]>ul>li>a[href*="contact-us"]>span>span').should('exist')

        //Check if the Contact Us Button is visible
        cy.get('nav[class="header-nav"]>ul>li>a[href*="contact-us"]>span>span').should('be.visible')

        //Click the Contact Us Button
        cy.get('nav[class="header-nav"]>ul>li>a[href*="contact-us"]>span>span').click()

        //Check if the new url is called
        cy.url().should('include','contact-us')
    }

}
export default Homepage