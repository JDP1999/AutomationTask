class Homepage {
    loadHomepage(){
        cy.viewport(1150, 660)
        cy.visit('https://www.sogeti.com/')
        cy.wait(2000)
        cy.url().should('include','https://www.sogeti.com/')
        cy.wait(2000)
    }
    acceptCookies(){
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').should('exist')
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click({ force: true })
        cy.wait(3000)
    }
    clickServicesButton(){
        cy.get('.btn-filled').should('exist')
        cy.get('.btn-filled').click({ force: true })
        cy.wait(3000)
        cy.url().should('contain', 'services')
    }
    openBurgerMenue(){
        cy.get('.mobile-nav-button').should('be.visible')
        cy.get('.mobile-nav-button').click()
        cy.wait(3000)
    }
    clickGlobalLinksButton(){
        cy.get('.mobile-nav-bottom > .lang-current > span').should('be.visible')
        cy.get('.mobile-nav-bottom > .lang-current > span').click()
        cy.wait(2000)
    }
    clickBelgiumLink(){
        cy.get('#menu-location-menu-1 > :nth-child(2)').should('be.visible')
        cy.get('#menu-location-menu-1 > :nth-child(2)').click()
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.be/')
    }
    checkGlobalLinksButton() {
        cy.get('.mobile-nav-button').should('be.visible')
    }
    acceptCountriesCookies(){
        cy.get('button[class*="accept"]').should('be.visible')
        cy.get('button[class*="accept"]').click()
        cy.wait(2000)
    }
    clickFinnlandLink(){
        cy.get('#menu-location-menu-1 > :nth-child(3)').should('be.visible')
        cy.get('#menu-location-menu-1 > :nth-child(3)').click()
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.fi/')
    }
    clickFranceLink(){
        cy.get('#menu-location-menu-1 > :nth-child(4)').should('be.visible')
        cy.get('#menu-location-menu-1 > :nth-child(4)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.fr.sogeti.com/')
    }
    clickGermanyLink(){
        cy.get('#menu-location-menu-1 > :nth-child(5)').should('be.visible')
        cy.get('#menu-location-menu-1 > :nth-child(5)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.de/')
    }
    clickIrelandLink(){
        cy.get('#menu-location-menu-1 > :nth-child(6)').should('be.visible')
        cy.get('#menu-location-menu-1 > :nth-child(6)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.ie/')
    }
    clickLuxembourgLink(){
        cy.get('#menu-location-menu-1 > :nth-child(7)').should('be.visible')
        cy.get('#menu-location-menu-1 > :nth-child(7)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.lu/')
    }
    clickNorwayLink(){
        cy.get('#menu-location-menu-1 > :nth-child(9)').scrollIntoView()
        cy.get('#menu-location-menu-1 > :nth-child(9)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.no/')
    }
    clickNetherlandsLink(){
        cy.get('#menu-location-menu-1 > :nth-child(8)').scrollIntoView()
        cy.get('#menu-location-menu-1 > :nth-child(8)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.nl/')
    }
    clickSpainLink(){
        cy.get('#menu-location-menu-1 > :nth-child(10)').scrollIntoView()
        cy.get('#menu-location-menu-1 > :nth-child(10)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.es/')
    }
    clickSwedenLink(){
        cy.get('#menu-location-menu-1 > :nth-child(11)').scrollIntoView()
        cy.get('#menu-location-menu-1 > :nth-child(11)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.se/')
    }
    clickUnitedKingdomLink(){
        cy.get('#menu-location-menu-1 > :nth-child(12)').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.uk/')
        cy.get('button[class*="accept"]').should('be.visible')
    }
    clickUnitedStatesLink(){
        cy.get('#menu-location-menu-1 > :nth-child(13) > .menu-acc > .inner').click().first
        cy.wait(2000)
        cy.url().should('include', 'https://www.sogeti.us/')
        cy.get('button[class*="accept"]').should('be.visible')
    }
    changeViewPort(){
        cy.viewport(900,1200)
    }
    clickContactUsButton(){
        cy.get('.mobile-nav-contact > a > .outer > .inner').should('be.visible')
        cy.get('.mobile-nav-contact > a > .outer > .inner').click().first
    }

}
export default Homepage