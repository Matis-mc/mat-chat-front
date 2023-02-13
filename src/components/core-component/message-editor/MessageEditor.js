import { Formik, Form, Field } from "formik";
import "../../../styles/core-component/message-editor/message-editor.css"

function MessageEditor(props){

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
        onSubmit={(value) => alert(JSON.stringify(value))}
        >
            <Form>
                <Field className="message-field" type="text" name="message" placeholder="Type a message here ..."/>
                <button className="send-btn" type="submit">SEND</button>
            </Form>
        </Formik>
    </div>
    )
}
export default MessageEditor;