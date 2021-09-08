describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
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