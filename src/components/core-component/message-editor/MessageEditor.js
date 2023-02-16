import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../../../styles/core-component/message-editor/message-editor.css"

const MessageEditor = ({handleSubmit}) => {

    const contact = useSelector(state => state.contactReducer.contactMessageReceiver);

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
export default MessageEditor;