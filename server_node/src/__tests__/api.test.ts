import request from 'supertest';
import {api} from 'src/api';

jest.mock('src/modules');

describe('API test', () => {
    test('/todos GET method', (done) => {
        request(api).get('/todos').then((response) => {
            expect(response.status).toBe(200);
            done();
        });
    });
})