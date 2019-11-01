import React, {Component} from 'react'; 
import ChatLine from './chat.line';
import {all_users} from './../../constants';
import { connect } from "react-redux";
import TextBox from './text.box';


class Conversation extends Component { 
    
    render() {
        const friend_selected = this.props.friend_id;
        const base_user = this.props.base_user;
        const chat_history = this.props.chat_history;

        if(!friend_selected ) {
            return <div><h1>Welcome !</h1></div>
        }
        if(!chat_history || !chat_history[friend_selected]) {
            return <div><h1>Welcome !</h1>
                Start a Conversation with {all_users[friend_selected].name}
                <TextBox></TextBox>
            </div>
        }
        const prev_chat = chat_history[friend_selected].messages;
        return <div style={{"height" : "600px"}} className="text-white">
        <div style={{"height" : "450px", "overflowY" : "scroll", "wordWrap": "break-word", "display" : "block"}} className="row">{prev_chat.map((c, i) => <ChatLine key={i} message={c} base_user_id={base_user} friend_id={friend_selected}></ChatLine>)}</div>
        <TextBox></TextBox>
        </div>
    }
}

const mapStateToProps = state => {
    return state.user_reducer;
}

export default connect(mapStateToProps)(Conversation);