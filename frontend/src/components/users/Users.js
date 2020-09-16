import React, {Component} from 'react';
import UserInfo from "../user-info/UserInfo";
import PropTypes from "prop-types";
class Users extends Component{

    render() {
        return this.props.users.map((user) =>(
           <UserInfo user={user} key={user.id} removeUser = {this.props.removeUser}/>
        ));
    }
}

//PropTypes
Users.propTypes = {
    users:PropTypes.array.isRequired
}
export default Users;