import "../../../styles/core-component/contact-left-pannel/contact-left-pannel.css"
import AddContact from "./AddContact";
import ContactHeader from "./ContactHeader";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import AddContactForm from "./AddContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import ContactService from "../../../service/ContactService";

const ContactLeftPannel = () => {
    //todo : header
    //todo searchBAr

    const [openAddUserModal, setOpenAddUserModal] = useState(false); 
    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => fetchData, []);

    const fetchData = () => {
        ContactService.getContactsByIdUser()
            .then((response) => {
                setContacts(response.data);
                setError(null);
            })
            .catch((error) => {
                setError(error);
            })
    }
   
    const addUserClick = (event) => {
        setOpenAddUserModal(!openAddUserModal);
    }

    const handleAddUserSubmit = (value) => {
        console.log("add user submiting");
        ContactService.addContactToUserByEmail(value).then(
            (res) => {
                console.log(res);
                fetchData();
            }
        ).catch(
            (err) => {
                console.log(err);
                alert(err);
            }
        )
    }

    return(
    <div className="ctc-left-pannel-div">
        <AddContact handleClick={addUserClick} data-testid="add-ctc-comp"></AddContact>
        {openAddUserModal ? <AddContactForm handleOnSubmit={handleAddUserSubmit}/> : <ContactHeader data-cy="contact-header"/>}
        {error == null ?
        <div className="scrollable-view">
            <p onClick={fetchData} className="refresh-text">Refresh</p>
            {contacts.map(
                (contact) => 
                <Contact key={contact.name+contact.surname}
                contact={contact}/>)
            }
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