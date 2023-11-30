const request = require('supertest')
const baseUrl = require('../../../../env.js');
const { expect } = require('chai');


describe('Delete user', () => {

    const deleteUser = async (userId)=>{
        return request(baseUrl())
        .delete(`/users/${userId}`)
    }


    const logResponse = (desc, response)=>{
        console.log('----------------------------------');
        console.log('----------------------------------');
        console.log(desc);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
    }

    it('User deleted succesfully', async() => {
        const userId = 2
        const response = await deleteUser(userId)

        logResponse(`User id = ${userId} deleted`, response)

        expect(response.status).to.equal(204)
    });
    








});
