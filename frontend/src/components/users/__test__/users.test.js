import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import Users from "../Users";
import { act } from "@testing-library/react";
import pretty from "pretty";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

it("renders Users component correctly", () => {
  const fakeUsers = [
    {
      id: "1",
      name: "John",
      surname: "Marcus",
      username: "johnny",
      email: "john@gmail.com",
      password: "some-strong-password",
    },
    {
      id: "2",
      name: "Peter",
      surname: "Rubel",
      username: "peter",
      email: "peter@gmail.com",
      password: "some-strong-password2",
    },
    {
      id: "3",
      name: "Daniel",
      surname: "James",
      username: "daniel",
      email: "daniel@gmail.com",
      password: "some-strong-password3",
    },
  ];
  act(() => {
    ReactDOM.render(<Users users={fakeUsers} />, container);
  });
  expect(container.textContent).toContain(fakeUsers[0].email);
  expect(container.textContent).toContain(fakeUsers[1].email);
  expect(container.textContent).toContain(fakeUsers[2].email);

  //SNAP SHOP TEST
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div style=\\"padding: 10px; border-bottom: 1px dotted #ccc; display: flex; align-items: center; justify-content: space-between; justify-items: flex-start;\\">
      <div style=\\"display: flex; justify-content: space-between;\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"color: rgb(19, 138, 4); margin: 0px 10px 0px 0px;\\">
          <path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path>
        </svg>
        <p>John</p>
        <p>Marcus</p>
      </div>
      <p>john@gmail.com</p>
      <p>johnny</p>
      <div style=\\"display: flex;\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
    </div>
    <div style=\\"background-color: rgba(200, 212, 247, 0.8); padding: 10px; border-bottom: 1px dotted #ccc; display: flex; align-items: center; justify-content: space-between; justify-items: flex-start;\\">
      <div style=\\"display: flex; justify-content: space-between;\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"color: rgb(19, 138, 4); margin: 0px 10px 0px 0px;\\">
          <path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path>
        </svg>
        <p>Peter</p>
        <p>Rubel</p>
      </div>
      <p>peter@gmail.com</p>
      <p>peter</p>
      <div style=\\"display: flex;\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
    </div>
    <div style=\\"padding: 10px; border-bottom: 1px dotted #ccc; display: flex; align-items: center; justify-content: space-between; justify-items: flex-start;\\">
      <div style=\\"display: flex; justify-content: space-between;\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"color: rgb(19, 138, 4); margin: 0px 10px 0px 0px;\\">
          <path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path>
        </svg>
        <p>Daniel</p>
        <p>James</p>
      </div>
      <p>daniel@gmail.com</p>
      <p>daniel</p>
      <div style=\\"display: flex;\\"><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
    </div>"
  `);
});
