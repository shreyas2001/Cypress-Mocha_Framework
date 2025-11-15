import AxiosClient from '../../utils/axiosApiCalls';

describe('Negative POST API Test', () => {
    it('Should fail when hitting an invalid POST endpoint', () => {

        const payload = {
            title: 'Automation Test',
            body: 'This is invalid endpoint test.',
            userId: 1
        };

        return AxiosClient.post('https://jsonplaceholder.typicode.com/postss', payload)
            .then(() => {
                throw new Error('Request should have failed but succeeded');
            })
            .catch((error) => {
                // Axios stores status inside error.response
                expect(error.response.status).to.eq(404);
            });
    });
});
