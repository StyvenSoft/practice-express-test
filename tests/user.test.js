const request = require('supertest');

const app = require('../src/app');

describe('GET /users', () => {
    it('Respond with json containing a list of all users', done => {
        request(app)
            .get('/users')
            .set('Accept', 'Application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });
});

describe('GET /users/:id', () => {
    it('Respond with json containing a single users', (done) => {
        request(app)
            .get('/users/user01')
            .set("Accept", "application/json")
            .expect('Content-type', /json/)
            .expect(200, done);
    });
});