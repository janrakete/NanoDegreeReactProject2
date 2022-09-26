import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Login from "./Login";

const mockStore = configureStore([thunk]);

describe("Login", () => {
  
  let store, component;

  beforeEach(() => {
    store = mockStore({
      UserLoginLogout: "error-unknown-user"
    });

    component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });

  // Unit testing Case 6
  it("should display 'Unknown user' error message if user is unknown", () => {
    const submit = component.getByTestId("login-submit");
    fireEvent.click(submit);
    expect(component.getByTestId("error-message")).toBeInTheDocument();
  });
});