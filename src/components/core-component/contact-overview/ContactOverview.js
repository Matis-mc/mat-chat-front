import Avatar from "boring-avatars";
import { useSelector } from "react-redux";
import "../../../styles/core-component/contact-overview/contact-overview.css"

function ContactOverview(props){

    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);

    return(
    <div>
        {contact._id ?
        <div  className="contact-overview-div">
            <Avatar
                className="item"
                size={40}
                name={contact.email}
                variant="beam"
                colors={["#E8D5B7", "#6494ED", "#F0F8FF", "#F54979", "#ffffff"]}
            />
            <h2 className="item"> {contact.name} {contact.surname} </h2>
            <p className="item"> {contact.email} </p>
        </div>:<div  className="contact-overview-div">
            <h3 className="no-conv-item">Click on a contact to open a conversation</h3>
        </div>
        }
    </div>)
}

export default ContactOverview;