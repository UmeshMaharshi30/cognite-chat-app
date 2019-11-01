import React, {Component} from 'react'; 
import {all_users} from './../../constants';
import FriendTile from './friend.tile';

class AllFriendTiles extends Component {
    render() {
        const all_friends = all_users["dave"].friends;
        const tileClick = this.props.tileClick;
        return <ul className="list-group">
            {
                all_friends.map((f, i) => {
                    return <FriendTile key={i} id={f} tileClick={tileClick}></FriendTile>
                })
            }
        </ul>
    }
}

export default AllFriendTiles;