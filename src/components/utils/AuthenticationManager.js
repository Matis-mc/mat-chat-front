import jwtDecode from 'jwt-decode'
const tokenKey = "token";

class AuthenticationManager {

    _token;
    _user = null;
    _userChangeReg = [];
    userChanged;
    

    tokenUpdated(newToken) {
        this._token = newToken;
        if (this.userChanged) {
            this.userChanged(this);
        }
    }

    constructor() {

            var token = window.localStorage.getItem(tokenKey);
            if (token) {
                token = JSON.parse(window.localStorage.getItem(tokenKey));
            }
            this._processToken(token);
            window.addEventListener('storage', (event) => {
                if (event.key === tokenKey) {
                    var newToken = event.newValue;
                    if (newToken) {
                        newToken = JSON.parse(newToken);
                    }

                    this._processToken(newToken);
                    this.tokenUpdated(newToken);
                }
            }, false);

            setInterval(
                () => this.checkTokenExpiry(this)
                , 60000
            );
        
    }

    
    checkTokenExpiry(_this) {
        if (!_this) {
            _this = this;
        }
        if (_this._user != null) {
            let expired = _this._user.exp < (Date.now() - 1000 * 60 * 5) / 1000;
            if (expired) {
                //this.navigate("/login")
            }
        }
        return Promise.resolve();
    }

    _processToken(token) {
        if (!token) {
            return;
        }
        this._token = token;
        this._user = null;
        try {
            this._user = jwtDecode(token);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    getId() {
        if(this._user){
            return this._user.user_id;
        } else {
            return ""
        }
    }

    getEmail(){
        if(this._user){
            return this._user.email;
        } else {
            return ""
        }
    }

    updateToken(token) {
        this._token = token;
        this._processToken(token);
        if (token) {
            window.localStorage.setItem(tokenKey, JSON.stringify(token));
        }
        else {
            window.localStorage.removeItem(tokenKey);
        }
    }

    getAccessToken() {
        let result = window.localStorage.getItem(tokenKey);
        if (!result) {
            return "";
        }
        return JSON.parse(result);
    }

    getRefreshToken() {
        let result = window.localStorage.getItem(tokenKey);
        if (!result) {
            return "";
        }
        return JSON.parse(result).refreshToken;
    }

    isLoggedIn(){
        let result = window.localStorage.getItem(tokenKey);
        if (!result) {
            return false;
        }
        return true;
    }

    logout() {
        this.updateToken(null);
    }
}

export default new AuthenticationManager();