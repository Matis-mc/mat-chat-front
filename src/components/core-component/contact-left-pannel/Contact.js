import "../../../styles/core-component/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";
import Avatar from "boring-avatars";
import { store } from "../../../redux/store";
import MessageService from "../../../service/MessageService";

const Contact = (props) => {

    const onContactClick = () => {
        store.dispatch({type:"contact/select", payload: props.contact});
        getMessage();
    }

    const getMessage = () => {
        MessageService.getAllMessageFromContact(props.contact._id).then(
            (value) => {
                store.dispatch({type:"message/addset", payload: value.data})
            }
        )
    }



    return(
        <div className={"ctc-div"} onClick={() => onContactClick()} >
            <Avatar
            size={50}
            name={props.contact.email}
            variant="beam"
            colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
            />
            <ContactInfoDescription contact={props.contact}/>
        </div>
    )

}

export default Contact;