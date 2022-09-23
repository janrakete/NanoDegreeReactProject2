import { APIPollQuestionAdd, APIPollQuestionAddAnswer } from "../utils/API";
import { UserAddQuestionTo, UserAddAnswerTo } from "./Users";

export const POLLS_RECEIVE = "POLLS_RECEIVE";
export const POLL_QUESTION_ADD = "POLL_QUESTION_ADD";
export const POLL_QUESTION_ADD_ANSWER = "POLL_QUESTION_ADD_ANSWER";

export function PollsReceive(questions) {
  return {
    type: POLLS_RECEIVE,
    questions,
  };
}

function PollsQuestionAdd(question) {
  return {
    type: POLL_QUESTION_ADD,
    question,
  };
}

function PollsQuestionAddAnswer(author, qid, answer) {
  return {
    type: POLL_QUESTION_ADD_ANSWER,
    author,
    qid,
    answer,
  };
}

export function PollAddQuestionHandle(option1, option2) {
  return (dispatch, getState) => {
    const { UserLoginLogout } = getState();

    return APIPollQuestionAdd({optionOneText: option1, optionTwoText: option2, author: UserLoginLogout.id}).then(
      (question) => {
        dispatch(PollsQuestionAdd(question));
        dispatch(UserAddQuestionTo(question.author, question.id));
      }
    );
  };
}

export function PollAddAnswerHandle(questionId, answer) {
  return (dispatch, getState) => {
    const { UserLoginLogout } = getState();
    return APIPollQuestionAddAnswer(UserLoginLogout.id, questionId, answer).then(() => {
      dispatch(PollsQuestionAddAnswer(UserLoginLogout.id, questionId, answer));
      dispatch(UserAddAnswerTo(UserLoginLogout.id, questionId, answer));
    });
  };
}