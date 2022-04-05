describe('busca um novo curso', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br');

    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should('contain', 'Formação Java e Orientação a Objetos');
    })
})