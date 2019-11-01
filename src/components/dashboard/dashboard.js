import React, {Component} from 'react';
import AllFriends from './../tiles/all.friends';
import Conversation from './../conversation/conversation';
import { connect } from "react-redux";
import {user_actions } from './../../actions'
import {all_users} from './../../constants';

class Dashboard extends Component { 

    render() {
        const app_config = this.props.user_reducer;
        const base_user = app_config.base_user;
        const friend_selected = app_config.friend_id;
        const friendTileOnclick = this.props.onFriendTileClick;
        const chat_history = this.props.chat_history;
        const sendMessage = this.props.sendMessage;
        
        return <div className="container">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Cognite
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">{all_users[base_user].name}</a>
                    </li>
                </ul>
            </nav>
            <div className="row d-flex m-1">
                <div className="col-4"><AllFriends tileClick={friendTileOnclick}></AllFriends></div>
                <div className="col-8"><Conversation ></Conversation></div>
            </div>
        </div>
    }

}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => { 
    return {
        onFriendTileClick:(friend_id) => {
            dispatch(user_actions.openChat(friend_id))
        },
        sendMessage:(sender_id, receiver_id, message) => {
            dispatch(user_actions.sendMessage(sender_id, receiver_id, message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);