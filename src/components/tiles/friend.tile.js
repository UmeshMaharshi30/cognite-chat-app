import React, {Component} from 'react'; 
import {all_users} from './../../constants';
import { connect } from "react-redux";

class FriendTile extends Component {
    render() {
        const friend = all_users[this.props.id];
        var friend_name = friend.name;
        var friend_id = friend.id;
        return <li className={friend_id == this.props.user_reducer.friend_id ? "list-group-item btn active" : "list-group-item btn"} onClick={() => this.props.tileClick(friend_id)}>{friend_name}</li>
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(FriendTile);