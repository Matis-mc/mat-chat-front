import "../../styles/utils/add-form-component.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const AddContactForm = () => {

    return (
        <div className="form-group">
            <h2>Add a new contact</h2>
            <Formik
            initialValues={{ email: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Oups, email required ! ';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field type="email" name="email" className="form-field"/>
                <button className="submit-btn" type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                <ErrorMessage name="email" component="div" className="error-message" />
                </Form>
            )}
            </Formik>
      </div>
    )
}

export default AddContactForm;