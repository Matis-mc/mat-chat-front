import Avatar from "boring-avatars";
import { useSelector } from "react-redux";
import { store } from "../../../redux/store";
import "../../../styles/core-component/contact-left-pannel/favorite.css"

function Favorite(){

    const contacts = useSelector(state => state.listContactsReducer.contacts);

    const onContactClick = (contact) => {
        store.dispatch({type:"contact/select", payload: contact})
    }

    return(
        <div className="favorite-div">
            {contacts.map( (contact) => {
                    return contact.isFavorite?
                        <div className="avatar-favorite-div"
                        key={contact.email}
                        onClick={() => onContactClick(contact)}
                        >
                    <Avatar
                        size={45}
                        name={contact.email}
                        variant="beam"
                        colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
                    /></div>:null
                
            })}
        </div>
    )

}

export default Favorite;