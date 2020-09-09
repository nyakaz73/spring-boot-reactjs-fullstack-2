import React, {Component} from 'react';
import PropTypes from "prop-types";
class UserData extends Component{

    render() {
        return(
            <h3>{this.props.user.name}</h3>
        )
    }
}

//PropTypes
UserData.propTypes = {
    user : PropTypes.object.isRequired
}
export  default  UserData;