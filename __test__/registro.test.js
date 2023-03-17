const request = require('supertest');
const { app } = require('../app');
const mongoose = require('mongoose');

describe('Teste de registro de usuário', () => {
  afterAll(() => {
    return mongoose.connection.close();
  });

  test('Deve retornar status 422 ao criar um usuário existente', async () => {
    const response = await request(app)
      .post('/auth/registro')
      .send({
        nome: 'Fulano',
        email: 'fulano@teste.com',
        senha: 'senha123',
        confirmasenha: 'senha123',
      });
    expect(response.statusCode).toBe(422);
    debugger; // colocar o debugger aqui
  });
});

