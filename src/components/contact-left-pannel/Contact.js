import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import "../../styles/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";

function Contact(props){


    const [active,setActive] = useState(false);
    var classActive = active?"-active":"";

    return(
        <div className={"ctc-div"+classActive} onClick = { () => {setActive(!active); console.log("click click")}} >
            <img className="ctc-img" alt="coucou"></img>
            <ContactInfoDescription contact={props.contact}/>
        </div>
    )

}

export default Contact;