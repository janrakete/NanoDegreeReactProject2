import { USER_LOGIN, USER_LOGOUT } from '../actions/UserLoginLogout';
import UserLoginLogout from "./UserLoginLogout";

const USER = "mtsamis";

describe("UserLoginLogout", () => {
  // Optional testing case
  it("will set the logged in user: mtsamis", () => {
    expect(UserLoginLogout({}, { type: USER_LOGIN, user: USER })).toBe(USER);
  });
});