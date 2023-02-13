import "../../../styles/utils/add-form-component.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const AddContactForm = ({handleOnSubmit}) => {

    return (
        <div className="form-group">
            <h2>Add a new contact</h2>
            <Formik
            initialValues={{ email: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Oups, email required !';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(value) => handleOnSubmit(value.email)}
            >
            {({ isSubmitting }) => (
                <Form>
                    <Field data-cy="input-field" type="email" name="email" className="form-field"/>
                    <button data-cy="submit-button" className="submit-btn" type="submit" disabled={isSubmitting}>
                        Add
                    </button>
                    <ErrorMessage data-cy="error-field" name="email" component="div" className="error-message-header" />
                </Form>
            )}
            </Formik>
      </div>
    )
}

export default AddContactForm;