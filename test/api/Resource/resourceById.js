const request = require('supertest')
const baseUrl = require('../../../env.js');
const { expect } = require('chai');


describe('Get Single data of Resource', () => {
    
    const getSingleResource = (resourceId)=>{
        return request(baseUrl())
        .get(`/unknown/${resourceId}`)
    }

    const logResponse = (desc, response)=>{
        console.log('----------------------------------');
        console.log('----------------------------------');
        console.log(desc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Data : ', response.body);
    }

    it('respond with single resource data', async() => {
        const resourceId = 2
        const response = await getSingleResource(resourceId)

        logResponse(`Data on resource id : ${resourceId}`, response)
        expect(response.status).to.equal(200)
    });
    



});
