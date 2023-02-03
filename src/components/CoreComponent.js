import "../styles/core-component.css"
import ContactLeftPannel from "./contact-left-pannel/ContactLeftPannel";

function CoreComponent(){

    return(
        <div className="core-component">
            <div className="contact-pannel">
                <ContactLeftPannel></ContactLeftPannel>
            </div>
            <div className="message-pannel"></div>
        </div>
    )
}

export default CoreComponent;