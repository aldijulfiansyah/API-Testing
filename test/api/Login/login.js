const request = require('supertest')
const baseUrl = require('../../../env.js');
const { expect } = require('chai');


describe('Login', () => {

    const login = ()=>{
        return request(baseUrl()).post('/login')
        .send(
                {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            )
    }

    const logResponse = (desc, response)=>{
        console.log(desc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Body : ', response.body);
    }

    it('respond that user login succesfully', async() => {
        const response = await login()
        logResponse(`Login Detail`, response)
        expect (response.status).to.equal(200)
    });


    
});
