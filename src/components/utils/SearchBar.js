import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/utils/search-bar.css"

function SearchBar(props){
   
    return(
        <div className="sb-container">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="sb-icon"/>
            <input type="text" placeholder="Search..."/>
        </div>
    )
}

export default SearchBar;