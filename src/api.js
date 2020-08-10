import createAxiosInstance from './axiosInstance';

class Api {
    constructor(httpService) {
        this.service = httpService;
    }

    async getBeerBrands(options) {
        try {
            const response = await this.service.get('api/beerbrands', {
                params: options.params,
            });
            return response.data;
        } catch(err) {
            console.log(err);
        }
    }

    async getBottleForms(options) {
        try {
            const response = await this.service.get('api/bottles', {
                params: options.params,
            });
            return response.data;
        } catch(err) {
            console.log(err);
        }
    }

    async sendMainForm(options) {
        try {
            const response = await this.service.post('api/handleform', {
                data: options.data,
            });
            return response.data;
        } catch(err) {
            console.log(err);
        }
    }
}

export default new Api(createAxiosInstance());
