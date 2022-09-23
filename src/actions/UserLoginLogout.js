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
    const { UsersReceive } = getState();

    const user = Object.values(UsersReceive).find(
      (user) => user.id === username
    );

    return dispatch(UserLogin(user));
  };
}

export function UserLogoutHandle() {
  return (dispatch) => {
    return dispatch(UserLogout());
  };
}