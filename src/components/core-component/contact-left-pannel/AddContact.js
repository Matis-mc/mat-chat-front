import "../../../styles/core-component/contact-left-pannel/add-contact.css"


const AddContact = ({handleClick}) => {

    return(
        <button className="ctc-add-div" onClick={handleClick}>
            Create New
        </button>
    )
}

export default AddContact;