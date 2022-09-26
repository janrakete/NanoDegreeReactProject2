import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved, findByText } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import NavBar from "./NavBar";

const mockStore = configureStore([thunk]);

describe("NavBar", () => {
  const USER_NAME = "Mike Tsamis";
  const USER_ID = "mtsamis";
  const QUESTION_ID = "6ni6ok3ym7mf1p33lnez";
  const USER_PASSWORD = "xyz123";
  
  let store, component;

  beforeEach(() => {
    store = mockStore({
      UserLoginLogout: {
          id: USER_ID,
          name: USER_NAME,
          avatarURL: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y",
          password : USER_PASSWORD,
      },
    });

    component = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
  });

  // Unit testing Case 5
  it("should match the navbar snapshot with logged in user mtsamis", () => {
    expect(component).toMatchSnapshot();
  });
});


