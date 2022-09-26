import { UserLogin, UserLogout, USER_LOGIN, USER_LOGOUT } from "./UserLoginLogout";

describe("UserLoginLogout", () => {
	// Optional testing case
	it("will create action-type USER_LOGIN", () => {
		const user = "mtsamis";

		const expectation = {
			type: USER_LOGIN,
			user,
		};

		expect(UserLogin(user)).toEqual(expectation);
	});

	// Optional testing case
	it("will create action-type USER_LOGOUT", () => {
		const expectation = {
			type: USER_LOGOUT,
		};

		expect(UserLogout()).toEqual(expectation);
	});
});