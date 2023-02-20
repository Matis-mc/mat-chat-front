import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../../styles/core-component/message-editor/message-editor.css"
import { formats } from "./ToolbarOptions";



const MessageEditor = ({handleSubmit}) => {

    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);
    
    const [value, setValue] = useState('');

    return(
    <div className="form-div">
        <div className="editor-div">
            <ReactQuill theme="snow" value={value} onChange={setValue} formats={formats}/>           
        </div>
        <div className="submit-div">
        {contact._id ? 
                <button className="send-btn" type="submit" onClick={async () => {await handleSubmit(value); setValue('')}}>SEND</button>: ""}
        </div>
    </div>)

}

export default MessageEditor;