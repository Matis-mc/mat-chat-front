import "../../../styles/core-component/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";
import Avatar from "boring-avatars";

const Contact = (props) => {


    return(
        <div className={"ctc-div"} onClick={() => props.onContactClick(props.contact)} >
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