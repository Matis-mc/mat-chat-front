import "../../../styles/core-component/contact-left-pannel/contact-header.css"
import { TiThSmall } from "react-icons/ti"
import Favorite from "./Favorite";

function ContactHeader(props){

    return(
        <div className="ctc-header-div">
            <div className="ctc-header-title">
                <h1>Chat</h1>
                <TiThSmall className="ctc-header-icon"/>
            </div>
            <div className="ctc-header-favorite-div">
                <h2><Favorite/></h2>
            </div>
        </div>
    )
}

export default ContactHeader;