import React, {Component} from 'react'; 


class ChatLine extends Component { 
    render() {
        const message = this.props.message;
        const friend_id = this.props.friend_id;
        const base_user_id = this.props.base_user_id;
        return <div className="p-1" ><div className={message.id != friend_id ? "text-left" : "text-right"}><span className={message.id != friend_id ? "bg-primary rounded p-1" : "bg-secondary rounded p-1"}>{message.message}</span></div></div>
    }
}

export default ChatLine;