import Avatar from "boring-avatars";
import { useSelector } from "react-redux";
import "../../styles/profile-view/profile-view.css"

function ProfileView(){

    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);
    
    return(
        <div className="profile-view-div">
            <Avatar
                className="avatar-item"
                size={100}
                name={contact.email}
                variant="beam"
                colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
            />
            <div className="info-div">
                <h2>{contact.name}</h2>
                <h2>{contact.surname}</h2>
            </div>
        </div>
    )

}

export default ProfileView;