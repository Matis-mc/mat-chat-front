import axios from "axios";
import AuthenticationManager from "../components/utils/AuthenticationManager";

const API_URL = "http://localhost:3030/message/";

class MessageService {

    
    _buildHeader(){
        let _headers = {'x-access-token': `${AuthenticationManager.getAccessToken()}`}
        return _headers;
    }

    getAllMessageFromContact(_idContact){
        return axios.post(API_URL + AuthenticationManager.getId(), 
        {
            idContact: _idContact
        },
        {
            headers: this._buildHeader()
        })
    }

    postMessageToContact(content, _idContact, _tag){
        if( _idContact=="63fcc21115b473c716b4c581"){
             this.sendMessageToBot(content);
        } else {
            this.sendMessageToContact(content, _idContact, _tag)
        }

    }

    sendMessageToContact(content, _idContact, _tag){
        return axios.post(API_URL, 
        {
            idUser : AuthenticationManager.getId(),
            idContact : _idContact,
            content: content,
            tag:_tag
        },
        {
            headers: this._buildHeader()
        })
    }

    sendMessageToBot(content){
        return axios.post(API_URL + "/ai", 
        {
            content: content,
        },
        {
            headers: this._buildHeader()
        })
    }

}

export default new MessageService();