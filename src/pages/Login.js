import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/pages/login.css"
import AuthenticationManager from "../components/utils/AuthenticationManager";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";

function Login (props){

    const navigate = useNavigate();

    const submitLogin = (values) => {
        UserService.login(values.email, values.password).then((response) => {
            AuthenticationManager.updateToken(response.data.token);
            AuthenticationManager.updateRefreshToken(response.data.refreshToken);
            navigate("/");
        }).catch((error) => {
            console.error(JSON.stringify(error, null, 2));
            alert("Impossible de se connecter : " + JSON.stringify(error, null, 2));
        })
    }

    return(
        <div className="login-page">
            <div className="login-form">
                <h1>Login</h1>
                <Formik
                    initialValues={{ email: "", password: "" }}
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
                    onSubmit={submitLogin} >
                    <Form >
                        <Field className="field" name="email" type="text" placeholder="Email"/>
                        <Field className="field" name="password" type="password" placeholder="Password"/>
                        <button type="submit">Submit</button>
                        <ErrorMessage name="email" component="div"></ErrorMessage>
                    </Form>
                </Formik>

                <p onClick={() => navigate("/subscribe")} className="redirect-link">No subscription ? Click here !</p>
            </div>
        </div>
    )
}


export default Login;