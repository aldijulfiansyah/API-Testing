const request = require('supertest')
const baseUrl = require('../../../env.js');
const { expect } = require('chai');

describe('Get List of Resources', () => {

    const getAllResources = ()=>{
        return request(baseUrl())
        .get('/unknown')
    }

    const logResponse = (desc, response)=>{
        console.log('----------------------------------');
        console.log('----------------------------------');
        console.log(desc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Data : ', response.body);
    }


    it('responds with all resources data', async() => {
        const response = await getAllResources()

        logResponse('List of all resources : ', response)
        expect(response.status).to.equal(200)
    });

});
