import axios from "axios";

const API_URL = "http://localhost:3030/"

class ChatService {

    
    _headers = {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      };

    searchContactByEmail(_email){
        return axios.post(API_URL + "contact/username/", {email: _email})
    }

    getContactByIdUser(_idUser){
        return axios.get(API_URL + "/contact/user/" + _idUser, this._headers );
    }



}

export default new ChatService();