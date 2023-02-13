import AuthenticationManager from "../components/utils/AuthenticationManager";

class MatChatService {

    token = AuthenticationManager.getAccessToken();
    idUser = AuthenticationManager.getId();

        _headers =  
    {
        'x-access-token': `${this.token}`
    }

}

export default new MatChatService();