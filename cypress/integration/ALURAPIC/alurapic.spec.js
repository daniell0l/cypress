describe('Usabilidade tela inicial', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');

    })

    it('verificar mensagem de tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('verificar botao habilitado na tela inicial', () => {
        cy.contains('input[formcontrolname="userName"]').type('daniel');
        cy.contains('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('virifica nome da aplicacao da tela inical', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible'); 
    })

})
