import axios from "axios";

const API_URL = "http://localhost:3030/user/"

class UserService {

    _headers = {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      };

    login(_email, _password){
        return axios.post(API_URL+"login", {
            email: _email,
            password : _password
        }, this._headers);
    }

    subscribe(_name, _surname, _email, _password){
        return axios.post(API_URL + "register", {
            name: _name,
            surname : _surname,
            email: _email,
            password: _password
        }, this._headers);
    }

    refresh(_refreshToken){
        return axios.post(API_URL + "refresh", {
            refreshToken : _refreshToken
        }, this._headers);
    }
}

export default new UserService();