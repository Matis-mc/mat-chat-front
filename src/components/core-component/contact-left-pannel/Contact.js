import "../../../styles/core-component/contact-left-pannel/contact.css"
import ContactInfoDescription from "./ContactInfoDescription";
import Avatar from "boring-avatars";
import { store } from "../../../redux/store";
import MessageService from "../../../service/MessageService";
import { TiStarOutline, TiStar } from "react-icons/ti";
import ContactService from "../../../service/ContactService";

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

    const addFavorite = () => {
        console.log(props.contact._id);
        ContactService.addContactToFavorite(props.contact._id).then(
            () => props.handleRefresh()

        ).catch((err) => {
            console.error(err)
        })
    }

    const removeFavorite = () => {
        ContactService.removeContactToFavorite(props.contact._id).then(
            () => props.handleRefresh()
        ).catch((err) => {
            console.error(err)
        })
    }

    return(
        <div className={"ctc-div"}  >
            <div onClick={() => onContactClick()} className="ctc-sub-div">
                <Avatar
                size={45}
                name={props.contact.email}
                variant="beam"
                colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
                />
                <ContactInfoDescription contact={props.contact}/>
            </div>
            {props.contact.isFavorite?<TiStar className="fav-star-icon" onClick={() => removeFavorite()}/>:<TiStarOutline className="fav-star-icon" onClick={() => addFavorite()}/>}
        </div>
    )
}

export default Contact;