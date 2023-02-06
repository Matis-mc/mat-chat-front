import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios";
import "../../styles/contact-left-pannel/contact-header.css"
import SearchBar from "../utils/SearchBar";


function ContactHeader(props){

    const searchContact = (value) => {
        axios.post("http://localhost:3030/contact/username/", {email:value})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert("Aucun utilisateur trouvé pour cet email : " + value)
        })
        console.log(value);
    }

    return(
        <div className="ctc-header-div">
            <div className="ctc-header-title">
                <h1>Chat</h1>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" className="ctc-header-icon"/>
            </div>
            <SearchBar handleClick={searchContact}/>
        </div>
    )
}

export default ContactHeader;