import { useSelector } from "react-redux";
import Message from "./Message";

function ConversationView (props){

    const messages = useSelector(state => state.messageReducer.messagesToDisplay);
    console.log("state : " + JSON.stringify(messages))

    return(
        <div>
            {messages.map((message) => <Message key={message._id} value={message}/>)}
        </div>
    )

}

export default ConversationView;