import { useSelector } from "react-redux";
import { useInterval } from "../../hooks/useInterval";
import { store } from "../../redux/store";
import MessageService from "../../service/MessageService";
import "../../styles/core-component/core-component.css"
import ContactLeftPannel from "./contact-left-pannel/ContactLeftPannel";
import ContactOverview from "./contact-overview/ContactOverview";
import ConversationView from "./message-editor/ConversationView";
import MessageEditor from "./message-editor/MessageEditor";

function CoreComponent(){

    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);

    const sendMessage = (values) => {
        MessageService.postMessageToContact(values, contact._id, "00")
        .then( () =>
        fetchMessage()
        ).catch(
            (err) => console.log(err)
        )
    }

    const fetchMessage = () => {
       MessageService.getAllMessageFromContact(contact._id)
       .then((value) => {
            store.dispatch({type:"message/addset", payload: value.data})
       });
    }

    useInterval(fetchMessage, 3000);

    return(
        <div className="core-component">
            <div className="contact-pannel">
                <ContactLeftPannel></ContactLeftPannel>
            </div>
            <div className="contact-message-overview">
                <ContactOverview />
            </div>
            <div className="message-pannel">
                <ConversationView />
            </div>
            <div className="editor-pannel">
                <MessageEditor handleSubmit={sendMessage}></MessageEditor>
            </div>
        </div>
    )
}

export default CoreComponent;