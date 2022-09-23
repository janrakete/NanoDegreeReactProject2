import { UsersReceive } from "./Users";
import { PollsReceive } from "./Polls";
import { APILoadData } from "../utils/API";

import { showLoading, hideLoading} from 'react-redux-loading-bar'


export function InitialDataGet() {
  return (dispatch) => {
    dispatch(showLoading());
    return APILoadData().then(({ users, questions }) => {
      dispatch(UsersReceive(users));
      dispatch(PollsReceive(questions));
      dispatch(hideLoading());
    });
  };
}