const request = require('supertest');
const { app } = require('../app');

describe('Teste de registro de usuário', () => {
  test('Deve retornar status 422 ao criar um usuário existente', (done) => {
    request(app)
      .post('/auth/registro')
      .send({
        nome: 'Fulano',
        email: 'fulano@teste.com',
        senha: 'senha123',
        confirmasenha: 'senha123',
      })
      .then((response) => {
        expect(response.statusCode).toBe(422);
        done();
      })
      .catch((err) => done(err));
  });
});
