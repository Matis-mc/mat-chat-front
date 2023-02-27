import "../../../styles/core-component/contact-left-pannel/contact-left-pannel.css"
import AddContact from "./AddContact";
import ContactHeader from "./ContactHeader";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import AddContactForm from "./AddContactForm";
import ContactService from "../../../service/ContactService";
import {TiArrowRepeat} from "react-icons/ti"
import { store } from "../../../redux/store";
import { useSelector } from "react-redux";

const ContactLeftPannel = () => {
    //todo : header
    //todo searchBAr

    const listContacts = useSelector(state => state.listContactsReducer.contacts)

    const [openAddUserModal, setOpenAddUserModal] = useState(false); 
    const [error, setError] = useState(null);

    useEffect(() => fetchContacts, []);

    const fetchContacts = () => {
        console.log("fetch contacts");
        ContactService.getContactsByIdUser()
            .then((response) => {
                store.dispatch({type:"contacts/setlist", payload: response.data})
            })
            .catch((error) => {
                setError(error);
            })
    }
   
    const addUserClick = (event) => {
        setOpenAddUserModal(!openAddUserModal);
    }

    const handleAddUserSubmit = (value) => {
        ContactService.addContactToUserByEmail(value).then(
            (res) => {
                console.log(JSON.stringify(res));
                fetchContacts();
            }
        ).catch(
            (err) => {
                console.error(JSON.stringify(error));
                alert(err);
            }
        )
    }

    return(
    <div className="ctc-left-pannel-div">
        <AddContact handleClick={addUserClick} data-testid="add-ctc-comp"></AddContact>
        {openAddUserModal ? <AddContactForm handleOnSubmit={handleAddUserSubmit}/> : <ContactHeader data-cy="contact-header" contacts={listContacts}/>}
        {error == null ?
        <div className="scrollable-view">
            <TiArrowRepeat onClick = {fetchContacts} className="refresh-icon"/>
            {listContacts.map(
                (contact) => 
                <Contact key={contact.name+contact.surname}
                contact={contact}
                handleRefresh={fetchContacts}/>)
            }
        </div> : <div className="error-network-div">
            <TiArrowRepeat
            onClick = {fetchContacts} className="refresh-icon"/>
            <p className = "error-network-message">{error.message}</p>
        </div>
        }
    </div>)

}

export default ContactLeftPannel;