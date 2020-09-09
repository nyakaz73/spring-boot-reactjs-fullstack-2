import React, {Component} from 'react';
import UserData from "./UserData";
import PropTypes from "prop-types";
class Users extends Component{

    render() {
        return this.props.users.map((user) =>(
           <UserData user={user} key={user.id}/>
        ));
    }
}

//PropTypes
Users.propTypes = {
    users:PropTypes.array.isRequired
}
export default Users;