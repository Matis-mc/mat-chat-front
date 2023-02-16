import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../../styles/core-component/message-editor/message-editor.css"



const MessageEditor = ({handleSubmit}) => {

    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);
    
    const [value, setValue] = useState('');

    return(
    <div className="form-div">
        <div className="editor-div">
            <ReactQuill theme="snow" value={value} onChange={setValue}/>           
        </div>
        <div className="submit-div">
        {contact._id ? 
                <button className="send-btn" type="submit" onClick={() => handleSubmit(value)}>SEND</button>: ""}
        </div>
    </div>)

}
/**
    return(<div className="editor-div">
        <Formik
        initialValues={{message: ''}}
        validate={values => {
            const errors = {};
            if(!values.message){
                errors.message = 'Your message is empty !';
            }
            return
        }}
        onSubmit={async (value, {resetForm}) => {
            await handleSubmit(value.message);
            resetForm({message: ''});
        }}
        >
            <Form>
                <Field className="message-field" type="text" name="message" placeholder="Type a message here ..."/>

                {contact._id ? 
                <button className="send-btn" type="submit">SEND</button>: ""}
            </Form>
        </Formik>
    </div>
    )
}
*/
export default MessageEditor;