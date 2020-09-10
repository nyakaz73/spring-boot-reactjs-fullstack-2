import React, {Component} from 'react';
import PropTypes from "prop-types";
class RegisterUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            surname:'',
            email:'',
            username:'',
            password:''
        }
        //If you dont use arrow function you will have to manually bind like this
        //If you dont bind you wont be able to access items in the state of this component because it wont be recognised in lifecycle
        //this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange =(e) =>{
        //This is what you do for individual target
        //this.setState({name:e.target.value});
        //But if you have plenty
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        //Copying state object to newUser
        let newUser = this.state;
        this.props.addUser(newUser);
        //Resetting the fields
        this.setState({
            name:'',
            surname:'',
            email:'',
            username:'',
            password:''
        });
    }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div style={{display:'flex' }}>
                    <input
                        type = "text"
                        name = "name"
                        placeholder="Name"
                        style={leftInput}
                        value={this.state.name}
                        onChange={this.onChange}
                    />

                    <input
                        type = "text"
                        name = "surname"
                        placeholder="Surname"
                        style={rightInput}
                        value={this.state.surname}
                        onChange={this.onChange}
                    />
                </div>
                <br/>
                <div style={{display:'flex', }}>
                    <input
                        type = "text"
                        name = "username"
                        placeholder="Username"
                        style={leftInput}
                        value={this.state.username}
                        onChange={this.onChange}
                    />

                    <input
                        type = "text"
                        name = "password"
                        placeholder="Password"
                        style={rightInput}
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                </div>
                <br/>
                <div style={{display:'flex' }}>
                    <input
                        type = "text"
                        name = "email"
                        placeholder="Email"
                        style={leftInput}
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                   <span style={rightInput}></span>
                </div>
                <br/>
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                />
                <br/>
            </form>
        )
    }
}

const leftInput = {
    flex:'5',
    padding:'5px',
    margin:'10px 10px 0px 0px'
}

const rightInput = {
    flex:'5',
    padding:'5px',
    margin:'10px 0px 0px 10px'
}

RegisterUser.propTyoes = {
    addUser:PropTypes.func.isRequired,
}

export default RegisterUser;