import React, { Component } from "react";
import ReactDOM from "react-dom";
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
                email:"md@dan.com",
                username:"marcus",
                password:"strong-password2"
            },
            {
                id:3,
                name:"Daniel",
                surname:"Johns",
                email:"d@jonhs.com",
                username:"danny",
                password:"strong-password3"
            }
        ]
    }
    render() {
        return (
            <div>
                <Users users={this.state.users}/>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));