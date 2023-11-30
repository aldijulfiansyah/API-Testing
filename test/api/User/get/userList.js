const request = require('supertest')
const baseUrl = require('../../../../env.js')

describe('Get List of users', () => {

    const logResponse = (pageTitle, response)=>{
        console.log('----------------------------------');
        console.log('----------------------------------');
        console.log(pageTitle);
        console.log('----------------------------------');
        console.log('Status : ', response.status);
        console.log('Data : ', response.body);
    }


    it('responds with all users data on page 1', async() => {
        const response = await request(baseUrl())
        .get('/users')
        .query({page: 1})

        logResponse('List of users page 1', response)
    });

    it('responds with all users data on page 2', async() => {
        const response = await request(baseUrl())
        .get('/users')
        .query({page: 2})


        logResponse('List of users page 2', response)
    });
    
});
