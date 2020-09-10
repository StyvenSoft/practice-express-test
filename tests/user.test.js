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

    it('Respond with json "User found: user01" when the user exists', (done) => {
        request(app)
            .get('/users/user01')
            .set("Accept", "application/json")
            .expect('Content-type', /json/)
            .expect(200)
            .expect('"User found: user01"')
            .end((err) => {
                err ? done(err) : done();
            });
    });

    it('Respond with json "user not found" when the user dont exists', (done) => {
        request(app)
            .get('/users/notstringuser')
            .set("Accept", "application/json")
            .expect('Content-type', /json/)
            .expect(404)
            .expect('"User not found!"')
            .end((err) => {
                err ? done(err) : done();
            });
    });
});

describe('POST /users', () => {
    it('Respond with 201 created', done => {
        const data = {
            username: 'root',
            password: 'toor'
        }
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'Application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                err ? done(err) : done();
            })
    });

    it('Respond code 400 on bad request', done => {
        const data = {};
        request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"User not created!"')
            .end((err) => {
                err ? done(err) : done();
            })
    });
});