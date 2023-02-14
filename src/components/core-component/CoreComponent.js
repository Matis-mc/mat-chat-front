import { useState } from "react";
import MessageService from "../../service/MessageService";
import "../../styles/core-component/core-component.css"
import ContactLeftPannel from "./contact-left-pannel/ContactLeftPannel";
import ConversationView from "./message-editor/ConversationView";
import MessageEditor from "./message-editor/MessageEditor";

function CoreComponent(){

    const [messages, setMessages] = useState([]);
    const [contactSelected, setContactSelected] = useState({})

    const sendMessage = (values) => {
        MessageService.postMessageToContact(values, "63e9f087dfc9b67041ea4289", "00")
        .then(
            getMessage("63e9f087dfc9b67041ea4289")
        ).catch(
            (err) => console.log(err)
        )
    }

    const selectContact = (contact) => {
        setContactSelected(contact);
        console.log("contact selected " + JSON.stringify(contact));
    }

    const getMessage = (value) => {
       MessageService.getAllMessageFromContact(value)
       .then((value) => {
            console.log(JSON.stringify(value.data));
            setMessages(value.data);
       });
    }

    return(
        <div className="core-component">
            <div className="contact-pannel">
                <ContactLeftPannel handleContactClick={selectContact}></ContactLeftPannel>
            </div>
            <div className="message-pannel">
                <ConversationView messages={messages}/>
            </div>
            <div className="editor-pannel">
                <MessageEditor handleSubmit={sendMessage}></MessageEditor>
            </div>
        </div>
    )
}

export default CoreComponent;