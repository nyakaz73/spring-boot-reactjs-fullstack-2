import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from '../../../frontend/src/components/layouts/Header';
import AddUser from  '../../../frontend/src/components/AddUser';
import Users from '../../../frontend/src/components/Users';

export class App extends Component {
    state = {
        users:[
            {
                id:1,
                name:"John",
                surname:"Doe",
                email:"john@doe.com",
                username:"johnny",
                password:"strong-password"
            },
            {
                id:2,
                name:"Marcus",
                surname:"Daniels",
                email:"marc@dan.com",
                username:"marcus",
                password:"strong-password2"
            },
            {
                id:3,
                name:"Daniel",
                surname:"Johns",
                email:"dane@jonhs.com",
                username:"danny",
                password:"strong-password3"
            }
        ]
    }

    //Deleting User
    removeUser = (id) =>{
        this.setState(
            {users: [...this.state.users.filter(
                    user => user.id !== id
                )]}
        );
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <AddUser/>
                <Users users={this.state.users} removeUser={this.removeUser}/>
            </div>
        );
    }
}



export default App;

ReactDOM.render(<App />, document.querySelector("#app"));