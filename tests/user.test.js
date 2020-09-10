const request = require('supertest');

const app = require('../src/app');

it('Respond with json containing a list of all users', done => {
    request(app)
        .get('/users')
        .set('Accept', 'Application/json')
        .expect('Content-type', /json/)
        .expect(200, done);
});