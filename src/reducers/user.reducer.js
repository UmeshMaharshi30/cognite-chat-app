import {user_constants, chat_history} from './../constants';

const user_reducer = (state = null, action)  => { 
    switch(action.type) { 
        case user_constants.OPEN_CHAT:
            return {...state, friend_id : action.payload.friend_id};
        case user_constants.SEND_MESSAGE:
                const receiver_id = action.payload.receiver_id;
                const sender_id = action.payload.sender_id;
                const messageText = action.payload.message;
                const duplicate_chat_history = {...state.chat_history};
                if(!receiver_id || !sender_id) {
                    return state
                }
                let message = {id : sender_id, message : messageText};
                var temp_arr = [];
                if(!state.chat_history[receiver_id]) {
                    var start_convo = {id : receiver_id};
                    start_convo.messages = [message];
                    duplicate_chat_history[receiver_id] = start_convo;
                } else {
                    temp_arr = state.chat_history[receiver_id].messages.slice(0);
                    temp_arr.push(message);
                    duplicate_chat_history[receiver_id].messages = temp_arr;
                }
                var temp_state = {...state, chat_history : duplicate_chat_history}
                localStorage.setItem(sender_id, JSON.stringify(temp_state));
            return temp_state;
        default:
            if(JSON.parse(localStorage.getItem('dave'))) return JSON.parse(localStorage.getItem('dave'))
            let init_state = {base_user : "dave", chat_history : {}};
            return init_state;
    }
}

export default user_reducer;