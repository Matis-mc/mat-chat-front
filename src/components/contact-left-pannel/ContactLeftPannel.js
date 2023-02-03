import "../../styles/contact-left-pannel/contact-left-pannel.css"
import AddContact from "./AddContact";
import ContactHeader from "./ContactHeader";
import {contacts} from "../../data/contacts";
import Contact from "./Contact";
import { useState } from "react";
import AddContactForm from "../utils/AddContactForm";

function ContactLeftPannel(props){
    //todo : header
    //todo searchBAr

    const [openAddUserModal, setOpenAddUserModal] = useState(false); 

    const addUserClick = (event) => {
        setOpenAddUserModal(!openAddUserModal);
        console.log("hello, still there");
    }

    console.log(contacts);

        return(
        <div className="ctc-left-pannel-div">
            <AddContact handleClick={addUserClick}></AddContact>
            {openAddUserModal ? <AddContactForm/> : <ContactHeader/>}
            <div className="scrollable-view">
                {contacts.map(contact => <Contact key={contact.name+contact.surname} contact={contact}/>)}
            </div>
        </div>
    )

}

export default ContactLeftPannel;