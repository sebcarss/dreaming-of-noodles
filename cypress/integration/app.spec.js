describe('Navigating via the navbar', () => {
    beforeEach(() => {
        cy.visit('/preview')
    })

    it('should navigate to the Japan page', () => {
        cy.get('a[href*="/japan"]').click()

        cy.url().should('include', '/japan')
        cy.get('h1').contains('Japan')
        cy.get('title').contains('Japan | World Food Tour');
    })

    it('should navigate to the Index page', () => {
        cy.get('a[href*="/recipe-index"]').click()
        cy.url().should('include', '/recipe-index')
        cy.get('h1').contains('Recipe Index')
        cy.get('title').contains('Recipe Index')
    })

    it ('should navigate to the homepage', () => {
        cy.get('a[href="/"]').click()
        cy.url().should('include', '/')
        cy.get('title').contains('Dreaming of Noodles')
    })
})

describe('Navigating to recipes from the index page', () => {
    beforeEach(() => {
        cy.visit('/recipe-index');
    });

    it('should navigate to the Japan country page', () => {
        cy.get('[id="recipes-by-country-row"] a[href*="/japan"]').click();
        cy.wait(300);

        cy.url().should('include', '/japan');
        cy.get('h1').contains('Japan');
        cy.get('title').contains('Japan | World Food Tour');
    });

    it('should navigate to the bread tags listing page', () => {
        cy.get('[id="tags-row"] a[href*="/tags/bread"]').click();
        cy.wait(300);

        cy.url().should('include', '/tags/bread');
        cy.get('h1').contains('Bread Recipes');
        cy.get('title').contains('Bread Recipes');
    });
})