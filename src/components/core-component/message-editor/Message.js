import { useSelector } from "react-redux";
import "../../../styles/core-component/message-editor/message.css"
import Avatar from "boring-avatars";


function Message(props){


    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);

    let type = "";

    if(contact._id == props.value.idUserEmitter){
        type = "-received";
    }else{
        type="-sent";
    }

    return(
        <div className={"message-div".concat(type)}>
            <p className={"message".concat(type)}>{props.value.content}</p>
        </div>
    )

}

export default Message;