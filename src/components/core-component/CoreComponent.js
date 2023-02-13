import MessageService from "../../service/MessageService";
import "../../styles/core-component/core-component.css"
import ContactLeftPannel from "./contact-left-pannel/ContactLeftPannel";
import MessageEditor from "./message-editor/MessageEditor";

function CoreComponent(){

    const sendMessage = (values) => {
        MessageService.postMessageToContact(values, "63e9f087dfc9b67041ea4289", "00")
        .then(
            () => this.getMessage("63e9f087dfc9b67041ea4289")
        ).catch(
            (err) => console.log(err)
        )
    }

    const getMessage = (value) => {
        console.log("get message !")
    }

    return(
        <div className="core-component">
            <div className="contact-pannel">
                <ContactLeftPannel></ContactLeftPannel>
            </div>
            <div className="message-pannel">
            </div>
            <div className="editor-pannel">
                    <MessageEditor handleSubmit={sendMessage}></MessageEditor>
            </div>
        </div>
    )
}

export default CoreComponent;