import "../../styles/contact-left-pannel/add-contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AddContact = ({handleClick}) => {


    return(
        <button className="ctc-add-div" onClick={handleClick}>
            Create New
        </button>
    )
}

export default AddContact;