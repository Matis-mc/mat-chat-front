import "../../../styles/core-component/contact-left-pannel/add-contact.css"
import { TiUserAdd } from "react-icons/ti"

const AddContact = ({handleClick}) => {

    return(
        <button className="ctc-add-div" onClick={handleClick}>
            <p>Add contact </p> <TiUserAdd className="ctc-add-icone" />
        </button>
    )
}

export default AddContact;