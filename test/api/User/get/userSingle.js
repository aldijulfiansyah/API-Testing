const request = require('supertest')
const baseUrl = require('../../../../env.js');
const { expect } = require('chai');

describe('Get user by ID', () => {

    const getUserById = async(userId)=>{
        return request(baseUrl())
        .get(`/users/${userId}`)
    }


    const logResponse = (userDesc, response)=>{
        console.log('----------------------------------');
        console.log('----------------------------------');
        console.log(userDesc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Data : ', response.body);
    }


    it('responds with data user by id', async() => {
        const userId = 1
        const response = await getUserById(userId)

        logResponse(`User detail by id = ${userId}`, response)

        expect(response.status).to.equal(200);
    });

    it('responds with data user by id', async() => {
        const userId = 12;
        const response = await getUserById(userId)


        logResponse(`User detail by id = ${userId}`, response)
        expect(response.status).to.equal(200);
    });
    
});
