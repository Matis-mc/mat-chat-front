import axios from "axios";

const API_URL = "http://localhost:3030/"

class UserService {

    _headers = {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      };

    login(_email, _password){
        return axios.post(API_URL+"user/login", {
            email: _email,
            password : _password
        }, this._headers);
    }

    subscribe(_name, _surname, _email, _password){
        return axios.post(API_URL + "user/register", {
            name: _name,
            surname : _surname,
            email: _email,
            password: _password
        }, this._headers);
    }
}

export default new UserService();