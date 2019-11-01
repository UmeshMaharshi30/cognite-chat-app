import React, {Component} from 'react'; 
import { connect } from "react-redux";
import {user_actions} from './../../actions';

class TextBox extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
      }

    render() {
        const sendMessage = this.props.sendMessage;
        const base_user = this.props.base_user_id;
        const receiver = this.props.receiver_id;
        const text = this.state.value;
        const boxRef = this;

        function handleChange(event) {
            boxRef.setState({value: event.target.value});
        }

        function onClickHandler() {
            var messageText  = text.trim();
            if(!messageText) return;
            sendMessage(base_user, receiver, messageText);
            boxRef.setState({value: ''});
        }
        return <div className="input-group m-1" style={{"height" : "40px"}}>
                <textarea value={this.state.value} onChange={handleChange} className="form-control"></textarea>
                <button className="btn btn-outline-secondary" onClick={() => onClickHandler()}>Send</button>
        </div>
    }
}


const mapStateToProps = state => {
    return { "base_user_id" : state.user_reducer.base_user, "receiver_id" : state.user_reducer.friend_id};
}

const mapDispatchToProps = dispatch => { 
    return {
        sendMessage:(sender_id, receiver_id, message) => {
            dispatch(user_actions.sendMessage(sender_id, receiver_id, message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
