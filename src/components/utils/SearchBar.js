import { Form, Formik, Field } from "formik";
import "../../styles/utils/search-bar.css"

const SearchBar = ({handleClick}) => {
   
    return(
        <div className="sb-container">
            <Formik
                initialValues={{name:""}}
                onSubmit={async (values) => {
                    await handleClick(values.name)
                }}>
                    <Form>
                        <Field name="name" placeholder="Search..."/>
                        <button icon="fa-solid fa-magnifying-glass" type="submit" className="sb-icon">Search</button>
                    </Form>
                </Formik>
        </div>
    )
}

export default SearchBar;