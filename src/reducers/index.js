import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import UserLoginLogout from './UserLoginLogout';
import Users from './Users';
import Polls from './Polls';

export default combineReducers({
	UserLoginLogout,
	Users,
	Polls,
	loadingBar: loadingBarReducer,	
});