import { useState } from "react";
import "../../../styles/core-component/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";
import Avatar from "boring-avatars";

function Contact(props){

    const [active, setActive] = useState(false);
    var classActive = active?"-active":"";

    return(
        <div className={"ctc-div"+classActive} onClick = { () => {setActive(!active); console.log("click click")}} >
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