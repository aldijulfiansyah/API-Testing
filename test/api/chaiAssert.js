const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../env.js')
const userData = require('../../data/userData.js')


describe('Post request assert', () => { 

    const response = request(baseUrl())
        .post('/users')
        .send(userData.CREATE_USER_DATA
        )

    it('response status equal to 201', async() => {
        expect((await response).status).to.equal(201)
    });

    it('response have created at property ', async() => {
        expect((await response).body).to.haveOwnProperty(`createdAt`)
    });
    
    
 })