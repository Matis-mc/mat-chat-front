import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/contact-left-pannel/contact-header.css"
import SearchBar from "../utils/SearchBar";


function ContactHeader(props){

    return(
        <div className="ctc-header-div">
            <div className="ctc-header-title">
                <h1>Chat</h1>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" className="ctc-header-icon"/>
            </div>
            <SearchBar/>
        </div>
    )

}

export default ContactHeader;