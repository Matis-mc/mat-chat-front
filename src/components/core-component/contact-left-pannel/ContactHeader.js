import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../../styles/core-component/contact-left-pannel/contact-header.css"


function ContactHeader(props){

    return(
        <div className="ctc-header-div">
            <div className="ctc-header-title">
                <h1>Chat</h1>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis" className="ctc-header-icon"/>
            </div>
            <div className="ctc-header-favorite-div">
                <h2></h2>
            </div>
        </div>
    )
}

export default ContactHeader;