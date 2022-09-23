export const USERS_RECEIVE = "USERS_RECEIVE";
export const USER_ADD_QUESTION_TO = "USER_ADD_ADD_QUESTION_TO";
export const USER_ADD_ANSWER_TO = "USER_ADD_ANSWER_TO";

export function UsersReceive(users) {
	return {
		type: USERS_RECEIVE,
		users
	};
}

export function UserAddQuestionTo (author, qid) {
	return {
	  type: USER_ADD_QUESTION_TO,
	  author,
	  qid
	};
}

export function UserAddAnswerTo(author, qid, answer) {
	return {
	  type: USER_ADD_ANSWER_TO,
	  author,
	  qid,
	  answer,
	};
}
  
