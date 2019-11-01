import React, {Component} from 'react';
import AllFriends from './../tiles/all.friends';
import Conversation from './../conversation/conversation';

class Dashboard extends Component { 

    render() {
        return <div className="container">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Cognite
                </a>
            </nav>
            <div className="row d-flex m-1">
                <div className="col-4"><AllFriends></AllFriends></div>
                <div className="col-8"><Conversation></Conversation></div>
            </div>
        </div>
    }

}

export default Dashboard;