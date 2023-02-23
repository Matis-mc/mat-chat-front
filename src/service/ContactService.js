import axios from "axios";
import AuthenticationManager from "../components/utils/AuthenticationManager";
import MatChatService from "./MatChatService";

const API_URL = "http://localhost:3030/contact/";

class ContactService {

    
    _buildHeader(){
        let _headers = {'x-access-token': `${AuthenticationManager.getAccessToken()}`}
        return _headers;
    }

    
    searchContactByEmail(_email){
        return axios.post(API_URL + "username/", 
        {
            email: _email
        }, 
        {
            headers: this._buildHeader()
        });
    }

    getContactsByIdUser(){
        return axios.get(API_URL + "user/" +  AuthenticationManager.getId(),  
        {
            headers: this._buildHeader()
        });
    }

    addContactToUserByEmail(_emailContact){
        return axios.post(API_URL + "add/", 
        {
            email: _emailContact,
            user_id:  AuthenticationManager.getId()
        },
        {
            headers: this._buildHeader()
        });
    }

    addContactToFavorite(_idContact){
        return axios.post(API_URL + "/favorite/add",
        {
            contact_id: _idContact,
            user_id:  AuthenticationManager.getId()
        },
        {
            headers: this._buildHeader()
        }
        )
    }
    
    removeContactToFavorite(_idContact){
        return axios.post(API_URL + "/favorite/remove",
        {
            contact_id: _idContact,
            user_id:  AuthenticationManager.getId()
        },
        {
            headers: this._buildHeader()
        }
        )
    }

}

export default new ContactService();