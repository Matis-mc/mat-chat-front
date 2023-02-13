import axios from "axios";
import AuthenticationManager from "../components/utils/AuthenticationManager";
import MatChatService from "./MatChatService";

const API_URL = "http://localhost:3030/contact/";

class ContactService {

    
    token = AuthenticationManager.getAccessToken();
    idUser = AuthenticationManager.getId();

        _headers =  
    {
        'x-access-token': `${this.token}`
    }
    
    searchContactByEmail(_email){
        return axios.post(API_URL + "username/", 
        {
            email: _email
        }, 
        {
            headers: this._headers
        });
    }

    getContactsByIdUser(){
        return axios.get(API_URL + "user/" + this.idUser,  
        {
            headers: this._headers
        });
    }

    addContactToUserByEmail(_emailContact){
        return axios.post(API_URL + "add/", 
        {
            email: _emailContact,
            user_id: this.idUser
        },
        {
            headers : this._headers
        });
    }

}

export default new ContactService();