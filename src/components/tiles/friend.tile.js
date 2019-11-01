import React, {Component} from 'react'; 
import {all_users} from './../../constants';


class FriendTile extends Component {
    render() {
        const friend = all_users[this.props.id];
        var friend_name = friend.name;
        var friend_id = friend.id;
        return <li className="list-group-item btn">{friend_name}</li>
    }
}

export default FriendTile;