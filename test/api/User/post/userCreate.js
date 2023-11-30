const request = require('supertest')
const baseUrl = require('../../../../env.js');
const { expect } = require('chai');

describe('Create user', () => {

    const createUser = ()=>{
        return request(baseUrl()).post('/users')
        .send(
                {
                "name": "morpheus",
                "job": "leader"
                }
            )
    }

    const logResponse = (desc, response)=>{
        console.log(desc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Body : ', response.body);
    }

    it('respond user that created succesfully', async() => {
        const response = await createUser()
        logResponse(`Create user`, response)
        expect (response.status).to.equal(201)
    });


    
});
