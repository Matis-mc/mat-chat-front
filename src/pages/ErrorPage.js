import { useRouteError } from "react-router-dom";
import "../styles/pages/error-page.css"

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div className="error-page">
            <div className="error-message">
                <h1>Ooooops !</h1>
                <p>Your favorite application may have a problem ...</p>
                <p>{ error.statusText || error.message }</p>
            </div>
        </div>
    )
}