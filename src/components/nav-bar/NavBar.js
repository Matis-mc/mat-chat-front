import "../../styles/nav-bar/nav-bar.css"
import AuthenticationManager from "../utils/AuthenticationManager";
import Avatar from "boring-avatars"
import { TiMessage, TiPower } from "react-icons/ti";

function NavBar(props){

    const logout = () => {
        AuthenticationManager.logout();
    }

    return(
        <div className="nav-bar-div">
            <div className="avatar-div">
                <Avatar className="avatar"
                size={50}
                name={AuthenticationManager.getEmail()}
                variant="beam"
                colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
                /> 
                <p className="email-p">{AuthenticationManager.getEmail()}</p>
            </div>           
            <TiPower className="nav-bar-icon"
            onClick={logout}/>
            <TiMessage className="nav-bar-icon"/>
        </div>
    )
}

export default NavBar;