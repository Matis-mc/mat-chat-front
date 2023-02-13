import axios from "axios";
import AuthenticationManager from "../components/utils/AuthenticationManager";
import MatChatService from "./MatChatService";

const API_URL = "http://localhost:3030/message/";

class MessageService {

    
    token = AuthenticationManager.getAccessToken();
    idUser = AuthenticationManager.getId();

        _headers =  
    {
        'x-access-token': `${this.token}`
    }

    getAllMessageFromContact(_emailContact){
        return axios.post(API_URL + this.idUser, 
        {
            emailContact: _emailContact
        },
        {
            headers: this._headers
        })
    }

    postMessageToContact(content, _emailContact, _tag){
        return axios.post(API_URL, 
            {
                idUSer : this.idUser,
                emailContact : _emailContact,
                content: content,
                tag:_tag
            },
            {
                headers: this._headers
            })
    }


}