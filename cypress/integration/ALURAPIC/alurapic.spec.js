describe('Login e registro de usuario alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');

    })

    it('verifica mensagens de validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');


    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('daniel');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })

    it('verifica mensagens de senha com menos de 8 catacteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })
    
    it('verifica mensagens de usuario com a letra maiuscola', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('DANIEL');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })

    it('verifica mensagens de usuario com nome completo', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('D');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

    })

    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');

    })

    it('fazer login de usuario invalido', () => {
        cy.login('daniel', '1234');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

    })

    const usuario = require ('../../fixtures/usuario.json');
    usuario.forEach(usuario => {
       
        it.only(`registrar novo usuario ${usuario.userName})`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.passwoar);
            cy.contains('button', 'Register').click(); 
        })

    })
})
