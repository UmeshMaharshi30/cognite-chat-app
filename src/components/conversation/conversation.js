import React, {Component} from 'react'; 
import {chat_history} from './../../constants';
import ChatLine from './chat.line';
import TextBox from './text.box';


class Conversation extends Component { 
    
    render() {
        const friend_selected = "john";
        const base_user = "dave";
        if(!friend_selected) {
            return <div>Welcome !</div>
        }
        const users_prev_chat = chat_history[base_user].filter((chat, index) => {
            if(chat.id == friend_selected) return chat;
        });
        const prev_chat = users_prev_chat[0].messages;
        return <div style={{"height" : "600px"}}>
        <div style={{"max-height" : "450px", "min-height" : "200px"}}>{prev_chat.map((c, i) => <ChatLine key={i} message={c} base_user_id={base_user} friend_id={friend_selected}></ChatLine>)}</div>
        <TextBox></TextBox>
        </div>
    }
}

export default Conversation;