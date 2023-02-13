import axios from "axios";
import AuthenticationManager from "../components/utils/AuthenticationManager";

const API_URL = "http://localhost:3030/message/";

class MessageService {

    
    token = AuthenticationManager.getAccessToken();
    idUser = AuthenticationManager.getId();

        _headers =  
    {
        'x-access-token': `${this.token}`
    }

    getAllMessageFromContact(_idContact){
        return axios.post(API_URL + this.idUser, 
        {
            idContact: _idContact
        },
        {
            headers: this._headers
        })
    }

    postMessageToContact(content, _idContact, _tag){
        return axios.post(API_URL, 
            {
                idUser : this.idUser,
                idContact : _idContact,
                content: content,
                tag:_tag
            },
            {
                headers: this._headers
            })
    }
}

export default new MessageService();