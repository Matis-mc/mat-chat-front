const initialState = {
    contactMessageReceiver:{
        _id:"",
        name:"",
        surname:"",
        email:""
    }
};

export default function contactReducer(state = initialState, action) {

    switch(action.type) {
        case "contact/select":
            return {...state, 
                contactMessageReceiver: {
                    _id: action.payload._id,
                    name: action.payload.name,
                    surname: action.payload.surname,
                    email: action.payload.email
                }};
        default:
            return state;
    }
}

