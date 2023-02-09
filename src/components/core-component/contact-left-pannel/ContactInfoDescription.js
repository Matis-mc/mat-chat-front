import "../../../styles/core-component/contact-left-pannel/contact-info-description.css"

function ContactInfoDescription(props){

    const name = props.contact.surname + " " + props.contact.name;
    //todo : calculer temps de déconnexion
    return(
        <div className="ctc-info-div">
            <h3 className="ctc-info-name">{name}</h3>
            <p className="ctc-info-tps-connexion">{props.contact.connected ? "Connected" : props.contact.dateLastConnexion}</p>
        </div>
    )

}

export default ContactInfoDescription;