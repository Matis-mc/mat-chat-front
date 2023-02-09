import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ChatService from "../../../service/ChatService";
import "../../../styles/core-component/contact-left-pannel/contact-header.css"
import SearchBar from "../../utils/SearchBar";


function ContactHeader(props){

    const searchContact = (value) => {
        ChatService.searchContactByEmail(value.email)
        .then((response) => {
            console.log(response);
        })
        .catch(() => {
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