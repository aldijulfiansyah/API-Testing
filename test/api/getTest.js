const request = require('supertest')
const baseUrl = require('../../env.js')

describe('Get Request', () => {
    it('get list resources', async() => {
        const response = request(baseUrl())
        .get('/unknown')
        console.log((await response).status);
        console.log((await response).body);
    });
    
});
