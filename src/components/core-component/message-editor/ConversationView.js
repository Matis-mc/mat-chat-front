import Message from "./Message";

function ConversationView (props){


    return(
        <div>
            {props.messages.map((message) => <Message key={message._id} value={message}/>)}
        </div>
    )

}

export default ConversationView;