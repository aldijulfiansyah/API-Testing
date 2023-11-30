const request = require('supertest')
const baseUrl = require('../../../../env.js');
const { expect } = require('chai');

describe('Update User', () => {

    const updateUser = async(userId, updatedUserData)=>{
        return request(baseUrl())
        .put(`/users/${userId}`)
        .send(updatedUserData)
    }

    const getUserById = async (userId) => {
        return request(baseUrl())
        .get(`/users/${userId}`);
    };


    const logResponse = (userDesc, response)=>{
        console.log('----------------------------------');
        console.log('----------------------------------');
        console.log(userDesc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Data : ', response.body);
    }


    it('responds with data user by id before update', async() => {
        const userId = 2
        const response = await getUserById(userId)

        logResponse(`User detail by id = ${userId}`, response)

        expect(response.status).to.equal(200);
    });

    it('updates user data and responds with the updated data', async() => {
        const userId = 2;
        const updatedUserData = {

            "name": "morpheus",
            "job": "zion resident"

        }
        const response = await updateUser(userId, updatedUserData);

        logResponse(`Updated User detail by id = ${userId}`, response)
        expect(response.status).to.equal(200);
    });
    

});
