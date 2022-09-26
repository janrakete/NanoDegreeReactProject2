export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function UserLogin(user) {
	return {
		type: USER_LOGIN,
		user
	};
}

export function UserLogout() {
	return {
		type: USER_LOGOUT
	};
}

export function UserLoginHandle(username) {
  return (dispatch, getState) => {
    const { Users } = getState();

    const user = Object.values(Users).find(
      (user) => user.id === username
    );

    if (user)
      return dispatch(UserLogin(user));
    else
      return dispatch(UserLogin("error-unknown-user"));
  };
}

export function UserLogoutHandle() {
  return (dispatch) => {
    return dispatch(UserLogout());
  };
}