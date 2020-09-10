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

## 2. Lets do some React Staff Now
So in this section we a re going to quickly implement a User Registration Application. This section is just as important as the reader will be able to learn 
the basic staff that you they need to know about react. Before i waste much of your time lets just jump in :

### 2a Components
So we are going to divide our UI into three components:
* Header Section
* RegisterUser Section , which is basically going to  have our input fields and a submit button 
* UserInfo Section, which is going to display a list of our Registered Users

See Image below to have a visual aid of what we are trying to achieve.



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