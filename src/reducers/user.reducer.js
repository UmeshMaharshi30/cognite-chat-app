import {user_constants} from './../constants';

const user_reducer = (state = null, action)  => { 
    switch(action.type) { 
        case user_constants.OPEN_CHAT:
            return {...state, friend_id : action.payload.friend_id}
        default:
            if(state) return state
            let temp_state = {base_user : "dave"};
            return temp_state;
    }
}

export default user_reducer;