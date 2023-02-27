const initialState = {
    contacts: []
}

export default function listContactsReducer(state = initialState, action){
    switch(action.type){
        case "contacts/setlist":
            return {...state,
                contacts: action.payload
            };
        default :
            return state;
    }
}