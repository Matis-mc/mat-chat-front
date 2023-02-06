import "../../styles/contact-left-pannel/contact-left-pannel.css"
import AddContact from "./AddContact";
import ContactHeader from "./ContactHeader";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import AddContactForm from "../utils/AddContactForm";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function ContactLeftPannel(props){
    //todo : header
    //todo searchBAr

    const [openAddUserModal, setOpenAddUserModal] = useState(false); 
    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => fetchData, [])

    const fetchData = () => {
        console.log("fetch data called")
        axios("http://localhost:3030/contact/user/0")
        .then((response) => {
            setContacts(response.data.contacts);
            setError(null);
        })
        .catch((error) => {
            setError(error);
        })
    
    }

    const addUserClick = (event) => {
        setOpenAddUserModal(!openAddUserModal);
    }

    console.log(contacts);

        return(
        <div className="ctc-left-pannel-div">
            <AddContact handleClick={addUserClick}></AddContact>
            {openAddUserModal ? <AddContactForm/> : <ContactHeader/>}
            {error == null ?
            <div className="scrollable-view">
                {contacts.map(contact => <Contact key={contact.name+contact.surname} contact={contact}/>)}
            </div> : <div className="error-network-div">
                <FontAwesomeIcon 
                className = "refresh-icon" 
                icon = {faArrowsRotate} 
                onClick = {fetchData}/>
                <p className = "error-network-message">{error.message}</p>
            </div>
            }
        </div>
    )

}

export default ContactLeftPannel;