import axios from 'axios';

const url = 'api/quotes/';

class QuoteService {
    static getQuotes() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(quote => ({
                        ...quote,
                        createdAt: new Date(quote.createdAt)
                    }))
                )
            } catch (err) {
                reject(err);
            }
        })
    }

    static insertQuote(quote) {
        return axios.post(url, quote);
    }

    static deleteQuote(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default QuoteService;