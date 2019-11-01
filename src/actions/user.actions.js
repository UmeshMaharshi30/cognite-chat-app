import {user_constants} from './../constants';

export const user_actions = {
    sendMessage,
    openChat
}

function sendMessage(sender_id, receiver_id, message) {
    return {
        type : user_constants.SEND_MESSAGE,
        payload : {sender_id, receiver_id, message}
    }
}

function openChat(friend_id) {
    return {
        type : user_constants.OPEN_CHAT,
        payload : { friend_id : friend_id}
    }
}