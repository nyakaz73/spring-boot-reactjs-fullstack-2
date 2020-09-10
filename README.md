# Spring boot and React js fullstack application Part(2/2).

Full stack application part 2 with Spring boot and React js, with **REACT REDUX , JEST Test Runner**

This is a continuation of a [Part 1](https://github.com/nyakaz73/spring-boot-reactjs-fullstack) full stack application with Spring boot and React js, with **webpack** and **babel** which the git repository can be found [here](https://github.com/nyakaz73/spring-boot-reactjs-fullstack)

### Show some :heart: and :star: the repo to support the project 

## Lets go

Before we move on make sure you have folder structure that we ended up with on the [Part 1](https://github.com/nyakaz73/spring-boot-reactjs-fullstack) of this series
```cmd
- sample-project-root
    - frontend
        - src
            - actions
            - components
            - reducers
    - src
        - main
            -java
            - js
                App.js
                index.js
            - static
                main.css
            - resources
                - templates
                    index.html
 webpack.config.js
 package.json
 pom.xml
```
If not make sure you follow [Part1](https://github.com/nyakaz73/spring-boot-reactjs-fullstack) of this series where we setup our **Spring Boot RESTful API Server** and configured React with **Babel and Webpack**


## 1.  House Keeping

Just a quick i noticed i had forgot to configure babel in part1 of the series, If you didnt configure babel just quickly follow the following step, if you had already configured it you can skip this step:
### 1a Babel Configuration
Add a file name .babelrc to the root directory and configure babel:

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        },
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

### 1b. main.css
For some reason i noticed that if you put your main.css in /src/main/resources/static just like what Spring docs suggests, like we did in the last tutorial [Part 1]() , Spring wont recognise it unless you put it inside a css folder. Little weird if your ask me :)
* So just go ahead and update that and put you main.css file in  /src/main/resources/static/css/main.css like so.
* Remember also to update your main index.html in /src/main/resources/templates/index.html to have the correct reference of your main.css file. See code below:
```html
... 
<link type="text/css" href="css/main.css" rel="stylesheet" />
...
```
### 1c. React house keeping
React puts some weird puddings and margins on your components which might not be ideal for your designs, so to fix that up just quickly add this magic code to your main.css.

```css
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```
Make sure to restart your server to effect these changes.

* **NB** Make sure your server and webpack watch is running by running:
```cmd
$ mvn spring-boot:run
$ npm run-script watch
```


## 2. Lets do some React Staff Now
So in this section we a re going to quickly implement a User Registration Application. This section is just as important as the reader will be able to learn 
the basic staff that you they need to know about react. Before i waste much of your time lets just jump in :

## 2a Components
So we are going to divide our UI into three components:
* Header Section
* RegisterUser Section , which is basically going to  have our input fields and a submit button 
* UserInfo Section, which is going to display a list of our Registered Users

See Image below to have a visual aid of what we are trying to achieve.

<img src="https://raw.githubusercontent.com/nyakaz73/spring-boot-reactjs-fullstack-2/master/image1.png?token=ACTXJ5QPYANMLXUIAKPPTB27LJNS4" width="100%" height=auto />

It always good practice to divide you UI into components whenever you can as this  provides clean code that it easy to maintain. 

Now that you have a visual understanding if what we are trying to do , it should be easier for you to follow.
Okay Lets write our first Component.

### 2a i Header
Go to /frontend/src/components and create a folder called layout , this is where all our layouts will seat in in this case the Header.js component.
Now create a Header.js component inside the layout folder you just create with the the following code:

```js
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
function Header(){
    return(
        <header style={header}>
            <MenuIcon/>
            <h2>User Registration</h2>
            <p></p>
        </header>
    );
}

const header = {
    background:"#3b3e66",
    color: "#fff",
    padding:"10px",
    display:"flex",
    alignItems:'center',
    justifyContent:'space-between',

}
export default Header;

```
The code above show a functional component called Header. We have used a functional components over a class component because we are not dealing with life-cycle methods  in our layout component;
Your probably have noticed that im importing an icon from material which is a third part dependency so just quickly install material core and icon as shown below:

```cmd
$ npm install @material-ui/core
$ npm install material-icons
```
Now that you have installed these dependencies your code should be fine. Now we can easily bring in our <MenuIcon/> component as shown above.
In react you can do inline styling but in this case i have chose do do it with a variable instead just to keep the code clean and readable.
You need to remember to always export your Component so that it will available for use in other components. If you dont you wont be able to import it in other components.

You are probably wondering why your Header is not showing yet on your browser. Nothing to worry about remember our App.js file that is referenced as our entry point by webpack.config.js file, we need to bring in our components there , but for now lets just finish coding up these components first then will do that , just hang in a bit ::)


### 2a ii RegisterUser 
In the components root folder create a class based RegisterUser.js component with the following code:

```js
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
```
Unlike a function based component with only a return statement to render to render out jsx component , a class based component has **render** method which returns our jsx component.
Okay so Let break this component down:
* Your probably have noticed we have a constructor with states of our form fields. The constructor in a React component is called before the component is mounted, so this is probably the best place to place our states and everything that needs to be run before the component is rendered. React also  has multiple life cycle methods besides the constructer but they are beyond the scope of this article except for one which we shall discuss in the following section .
To lean more of life cycle method you can find them [here](https://reactjs.org/docs/react-component.html).

* React uses a concept of binding if you want to have access to the parent component. In this case the form in calling the  onSubmit method which is using **this** which (this) belongs to the parent component, hence a need for binding.
React has many ways of binding data to the parent , In this case i have used two the ways:
1. Binding in constructor **onSubmit** method
2. Binding using arrow functions  **onChange** method.
The onChange method will constantly update the state of our fields as we type some staff in the field areas.
To read more about binding you can find the information [here](https://reactjs.org/docs/faq-functions.html)

* The button has className=btn we are going to add the style in the main.css file in the resources folder:

```css
....
....
.container{
    padding: 0 1rem;
}

.btn {
    display: inline-block;
    border: none;
    background: #3b3e66;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
}


.btn:hover {
    background: #666;
}

```
The container class will be used in the App.js 

* PropTypes allow us to define props that being expected by a Component. This is a good practice to always define your props as it gives some sense of robustness in your application.
In this case the RegisterUser component is expecting an addUser prop function. The means that addUser function is going to be implemented at the Parent level of this component in this case the App.js component. 


### 2a iii App.js
Now i  think its time to take a look at our App.js component.

```js
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
```





### 2a iv UserInfo 
In the components root folder create a class based UserInfo.js component wih the following code.

```js
import React, {Component} from 'react';
import PropTypes from "prop-types";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
class UserInfo extends Component{

    //dynamic Styling
    infoStyle = () =>{
        return {
            backgroundColor: (this.props.user.id %2) == 0? '#c8d4f7cc' :'',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            justifyItems: 'flex-start',
        }
    }

    render() {
        //Destructuring instead of using this.props.user.<variable> you can now use name | surname
        const {id} = this.props.user;
        return(
            <div style={this.infoStyle()}>
                <div style={iconUsername}>
                    <AccountCircleIcon style={{color:"#138a04", margin:"0px 10px 0px 0px"}}/>
                    <p>{this.props.user.name }</p>
                </div>

                <p>{this.props.user.email}</p>
                <p>{this.props.user.username}</p>
                <div style={buttons}>
                    <IconButton color="secondary" onClick={this.props.removeUser.bind(this,id )} >
                        <DeleteIcon />
                    </IconButton>
                </div>

            </div>
        );
    }
}

const iconUsername = {
    display: 'flex',
    justifyContent:'space-between',

}

const buttons = {
    display: 'flex'
}
//PropTypes
UserInfo.propTypes = {
    user : PropTypes.object.isRequired
}
export  default  UserInfo;
```


Tasks

Update PropTypes as we go
Do step by step
CSS main.css staff
If there is anything you feel i should have covered or improve ,Please let me know in the comments section below.













### Source Code
The source code of this [Part2](https://github.com/nyakaz73/spring-boot-reactjs-fullstack-2) can be found on my git repository [here](https://github.com/nyakaz73/spring-boot-reactjs-fullstack-2)
[Part 1](https://github.com/nyakaz73/spring-boot-reactjs-fullstack) git repo is [here](https://github.com/nyakaz73/spring-boot-reactjs-fullstack)

### Pull Requests
I Welcome and i encourage all Pull Requests

## Created and Maintained by
* Author: [Tafadzwa Lameck Nyamukapa](https://github.com/nyakaz73) :
* Email:  [tafadzwalnyamukapa@gmail.com]
* Open for any collaborations and Remote Work!!
* Happy Coding!!

### License

```
MIT License

Copyright (c) 2020 Tafadzwa Lameck Nyamukapa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


```