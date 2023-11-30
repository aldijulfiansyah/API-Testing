const request = require('supertest')
const baseUrl = require('../../env.js')
describe('Post Request', () => {
    it('create user', async() => {
        const response = request(baseUrl())
        .post('/users')
        .send(
            {
            "name": "morpheus",
            "job": "leader"
            }
        )
        console.log((await response).status);
        console.log((await response).body);
    });
    
});
