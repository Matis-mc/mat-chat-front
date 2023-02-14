import "../../../styles/core-component/message-editor/message.css"

function Message(props){

    console.log(props);

    const type = "-sent";

    return(
        <div className={"message-div".concat(type)}>
            <p className={"message".concat(type)}>{props.value.content}</p>
        </div>
    )

}

export default Message;