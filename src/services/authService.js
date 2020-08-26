
export default class AuthService {
    constructor() {
        this.requestObject = {};
    }
    get() {

    }

    async post(url, bodyParams) {
        this.requestObject['method'] = 'POST';
        this.requestObject['headers'] = { 'Content-Type': 'application/json' };
        this.requestObject['body'] = JSON.stringify(bodyParams);
        return fetch(url, this.requestObject).then(response => {
            return response.json();
        }).catch(err => {
            return err;
        })
    }

    put() {

    }

    delete() {

    }

    setToken(token) {
        localStorage.setItem('authToken', token);
    }

    getToken() {
        return localStorage.getItem('authToken');
    }
}