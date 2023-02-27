import "../../../styles/core-component/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";
import Avatar from "boring-avatars";
import { store } from "../../../redux/store";
import MessageService from "../../../service/MessageService";
import { TiStarOutline, TiStar } from "react-icons/ti";
import ContactService from "../../../service/ContactService";
import { useState } from "react";

const Contact = (props) => {

    const [contact, setContact] = useState(props.contact);

    const onContactClick = () => {
        store.dispatch({type:"contact/select", payload: contact});
        getMessage();
    }

    const getMessage = () => {
        MessageService.getAllMessageFromContact(contact._id).then(
            (value) => {
                store.dispatch({type:"message/addset", payload: value.data})
            }
        )
    }

    const addFavorite = () => {
        console.log(contact._id);
        ContactService.addContactToFavorite(contact._id).then(
            () => {
                contact.isFavorite = true;
                setContact(contact);
            }
        ).catch((err) => {
            console.error(err)
        })
    }

    const removeFavorite = () => {
        ContactService.removeContactToFavorite(contact._id).then(
            () => {
                contact.isFavorite = false;
                setContact(contact);
            }
        ).catch((err) => {
            console.error(err)
        })
    }

    return(
        <div className={"ctc-div"}  >
            <div onClick={() => onContactClick()} className="ctc-sub-div">
                <Avatar
                size={45}
                name={contact.email}
                variant="beam"
                colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
                />
                <ContactInfoDescription contact={contact}/>
            </div>
            {contact.isFavorite?<TiStar className="fav-star-icon" onClick={() => removeFavorite()}/>:<TiStarOutline className="fav-star-icon" onClick={() => addFavorite()}/>}
        </div>
    )
}

export default Contact;