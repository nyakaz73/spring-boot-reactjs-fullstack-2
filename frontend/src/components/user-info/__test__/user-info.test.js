import React from "react";
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import UserInfo from "../UserInfo";
import { act } from "@testing-library/react";
import pretty from "pretty";
//For Snapshots Tests
import renderer from "react-test-renderer";
let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container)
  document.body.removeChild(container);
  container = null;
});

//
it("Renders User Info without crashing and Data Fetching Test", async () => {
  const fakeUser = {
    id: "1",
    name: "John",
    surname: "Marcus",
    username: "johnny",
    email: "john@gmail.com",
    password: "some-strong-password",
  };
  /*jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );*/
  // Simulate an async call
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Use the asynchronous version of act to apply resolved promises

  await act(async () => {
    ReactDOM.render(<UserInfo user={fakeUser} />, container);
  });

  expect(container.querySelector("p").textContent).toBe(fakeUser.name);
  expect(container.textContent).toContain(fakeUser.surname);
  expect(container.textContent).toContain(fakeUser.username);
  expect(container.textContent).toContain(fakeUser.email);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockClear();
  delete global.fetch;
});

it("Snapshot Test with user Prop",  () => {
  const fakeUser = {
    id: "1",
    name: "John",
    surname: "Marcus",
    username: "johnny",
    email: "john@gmail.com",
    password: "some-strong-password",
  };

  // Simulate an async call
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

   act( () => {
    ReactDOM.render(<UserInfo user={fakeUser} />, container);
  });
  expect(container.querySelector("p").textContent).toBe(fakeUser.name);
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
    </div>"
  `);

  expect(container.textContent).toContain(fakeUser.email);
});
