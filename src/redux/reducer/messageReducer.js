const initialstate = {
    messagesToDisplay : [

    ]
}

export default function messageReducer(state = initialstate, action) {
    switch(action.type) {
        case "message/addset":
            return {...state, 
                messagesToDisplay: action.payload
                };
        default:
            return state;
    }
}