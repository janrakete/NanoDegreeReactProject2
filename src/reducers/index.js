import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import UserLoginLogout from './UserLoginLogout';
import UsersReceive from './Users';
import Polls from './Polls';

export default combineReducers({
	UserLoginLogout,
	UsersReceive,
	Polls,
	loadingBar: loadingBarReducer,	
});