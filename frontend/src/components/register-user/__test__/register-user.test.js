import React from "react";
import ReactDOM from 'react-dom';
import { unmountComponentAtNode} from 'react-dom';
import RegisterUser from "../RegisterUser";
import {act} from "@testing-library/react";

//for Snapshot testing
import  renderer from 'react-test-renderer';
let container;

beforeEach(()=>{
    container = document.createElement('div')
    document.body.appendChild(container);
});

afterEach(()=>{
    //clean up code after exiting
    unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
});

it('renders RegisterUser component with or without addUser function callback prop without crusing',  ()=> {
    const addUser = jest.fn();
    act(()=>{
       ReactDOM.render(<RegisterUser addUser={addUser}/>,container);
    });

});

it("matches snapshot with No Prop", ()=>{
    const tree= renderer.create(<RegisterUser/>).toJSON();
    expect(tree).toMatchSnapshot();

})

it("matches snapshot with Exactly one addUser callback prop", ()=>{
    const addUser = jest.fn();
    const tree = renderer.create(<RegisterUser addUser={addUser}/>).toJSON();
    expect(tree).toMatchSnapshot();

});