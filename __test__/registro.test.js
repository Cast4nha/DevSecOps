const request = require('supertest')
const { app } = require('../app')

describe('Teste de registro de usuário', () => {
    test('Deve retornar status 422 ao criar um usuário existente', async () => {
        const response = await request(app)
            .post('/auth/registro')
            .send({
                nome: 'Fulano',
                email: 'fulano@teste.com',
                senha: 'senha123',
                confirmasenha: 'senha123'
            })
        expect(response.statusCode).toBe(422)
    })
})
