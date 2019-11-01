import React, {Component} from 'react'; 
import ChatLine from './chat.line';
import { connect } from "react-redux";
import TextBox from './text.box';


class Conversation extends Component { 
    
    render() {
        const friend_selected = this.props.friend_id;
        const base_user = this.props.base_user;
        const sendMessage = this.props.sendMessage;
        const chat_history = this.props.chat_history;

        if(!friend_selected ) {
            return <div><h1>Welcome !</h1></div>
        }
        if(!chat_history || !chat_history[friend_selected]) {
            return <div><h1>Welcome !</h1>
                Start a convo with {friend_selected}
                <TextBox></TextBox>
            </div>
        }
        const prev_chat = chat_history[friend_selected].messages;
        console.log(prev_chat);
        return <div style={{"height" : "600px"}}>
        <div style={{"height" : "450px"}}>{prev_chat.map((c, i) => <ChatLine key={i} message={c} base_user_id={base_user} friend_id={friend_selected}></ChatLine>)}</div>
        <TextBox></TextBox>
        </div>
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Conversation);