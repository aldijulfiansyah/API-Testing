const request = require('supertest')
const baseUrl = require('../../../env.js');
const { expect } = require('chai');


describe('Register', () => {

    const register = ()=>{
        return request(baseUrl()).post('/register')
        .send(
                {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            )
    }

    const logResponse = (desc, response)=>{
        console.log(desc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Body : ', response.body);
    }

    it('respond that user register succesfully', async() => {
        const response = await register()
        logResponse(`Register response : `, response)
        expect(response.status).to.equal(200)

    });

    it('response have token property ', async() => {
        const response = await register()
        expect(response.body).to.haveOwnProperty(`token`)
    });

    
});
