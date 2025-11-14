import AxiosClient from '../../utils/axiosApiCalls';

describe('Post Method API Test', () => {
    it('Should create a new post using Axios', () => {

    const payload ={
            title: 'Automation Test',
            body: 'This is a sample Axios POST request.',
            userId: 1
    }

    return AxiosClient.post('https://jsonplaceholder.typicode.com/posts', payload).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.data).to.have.property('id');
    expect(response.data.title).to.eq(payload.title);
    });
    });
});
