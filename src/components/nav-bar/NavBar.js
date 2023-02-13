import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/nav-bar/nav-bar.css"
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import AuthenticationManager from "../utils/AuthenticationManager";
import { useNavigate } from "react-router-dom";
import Avatar from "boring-avatars"

function NavBar(props){

    const navigate = useNavigate();

    const logout = () => {
        AuthenticationManager.logout();
        navigate("/login");
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
            <FontAwesomeIcon className="icon" icon="fa-arrow-right-from-bracket" 
            onClick={logout}/>
            <FontAwesomeIcon className="icon" icon={faMessage} ></FontAwesomeIcon>
        </div>
    )
}

export default NavBar;