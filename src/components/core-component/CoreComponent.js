import "../../styles/core-component/core-component.css"
import ContactLeftPannel from "./contact-left-pannel/ContactLeftPannel";
import MessageEditor from "./message-editor/MessageEditor";

function CoreComponent(){

    return(
        <div className="core-component">
            <div className="contact-pannel">
                <ContactLeftPannel></ContactLeftPannel>
            </div>
            <div className="message-pannel">
            </div>
            <div className="editor-pannel">
                    <MessageEditor></MessageEditor>
            </div>
        </div>
    )
}

export default CoreComponent;