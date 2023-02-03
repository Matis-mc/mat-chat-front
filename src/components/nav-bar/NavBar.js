import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/nav-bar/nav-bar.css"
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function NavBar(props){

    return(
        <div className="nav-bar-div">
            <FontAwesomeIcon className="icon" icon={faMessage} ></FontAwesomeIcon>
        </div>
    )
}

export default NavBar;