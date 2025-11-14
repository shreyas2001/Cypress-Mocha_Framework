import AxiosClient from '../../utils/axiosApiCalls';

describe("Checking GET api response",() =>{
    it("Get api response",() =>{
        Logger.info('Sending GET request...');
        return AxiosClient.get("https://jsonplaceholder.typicode.com/todos/1").then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('userId');
        })
    })
})