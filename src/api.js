import createAxiosInstance from './axiosInstance';

class Api {
    constructor(httpService) {
        this.service = httpService;
    }

    async getBeerBrands() {
        try {
            const response = await this.service.get('api/beerbrands');
            return response.data;
        } catch(err) {
            console.log(err);
        }
    }

    async getBottleForms() {
        try {
            const response = await this.service.get('api/bottles');
            return response.data;
        } catch(err) {
            console.log(err);
        }
    }
}

export default new Api(createAxiosInstance());
