import "../../../styles/core-component/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";
import Avatar from "boring-avatars";
import { store } from "../../../redux/store";

const Contact = (props) => {

    const onContactClick = () => {
        store.dispatch({type:"contact/select", payload: props.contact});
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