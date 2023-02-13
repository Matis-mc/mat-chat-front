import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/pages/subscribe.css"
import AuthenticationManager from "../components/utils/AuthenticationManager";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";


function Subscribe(props){

  const navigate = useNavigate();

  const submitSubscription = (values) => {
    UserService.subscribe(values.name, values.surname, values.email, values.password)
    .then((response) => {
      console.log(response);
      AuthenticationManager.updateToken(response.data.token);
      navigate("/");
    })
    .catch((error) => {
      console.error(JSON.stringify(error, null, 2));
      alert("L'enregistrement n'a pas pu être réalisé : " + JSON.stringify(error, null, 2))
    })
  }


  return(
    <div className="subscribe-page">
      <div className="subscribe-form">
        <h1>Subscribe</h1>
        <Formik
          initialValues={{ name: "test", surname:"test", email:"test@email.com", password: "test" }}
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
        onSubmit={submitSubscription} >
          <Form>
            <Field className="field" name="name" type="text" placeholder="name"/>
            <Field className="field" name="surname" type="text" placeholder="surname"/>
            <Field className="field" name="email" type="email" placeholder="email" />
            <Field className="field" name="password" type="password" placeholder="password"/>
            <button type="submit">Submit</button>
            <ErrorMessage name="email" component="div"></ErrorMessage>
          </Form>
        </Formik>

        <p onClick={() => navigate("/login")} className="redirect-link">You have an account ? Click here !</p>

      </div>
  </div>)
}

export default Subscribe;