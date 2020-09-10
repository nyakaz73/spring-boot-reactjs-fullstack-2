import React, {Component, useCallback} from "react";
import ReactDOM from "react-dom";
import Header from '../../../frontend/src/components/layouts/Header';
import RegisterUser from '../../../frontend/src/components/RegisterUser';
import Users from '../../../frontend/src/components/Users';
import axios from "axios";
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[
            ]
        }
    }

    componentDidMount() {
        axios.get('/user/all')
            .then(response => this.setState({users:response.data}))
    }

    //Deleting User
    removeUser = (id) =>{
        axios.delete(`/user/${id}`)
            .then(
                response =>this.setState( //Updating UI
                    {users: [...this.state.users.filter(
                            user => user.id !== id
                        )]}
                )
            );
    }

    addUser = (newUser) =>{
        axios.post('/user/save',newUser)
            .then(
                (response) =>{
                    console.log(response.data);
                    this.setState({users:[...this.state.users,response.data]})
                }
            );
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <RegisterUser addUser={this.addUser}/>
                <Users users={this.state.users} removeUser={this.removeUser}/>
            </div>
        );
    }
}


export default App;

ReactDOM.render(<App />, document.querySelector("#app"));