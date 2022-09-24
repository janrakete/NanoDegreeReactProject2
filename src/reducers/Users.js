import { USERS_RECEIVE, USER_ADD_QUESTION_TO, USER_ADD_ANSWER_TO } from '../actions/Users';

export default function Users(state = {}, action) {
	switch (action.type) {
		case USERS_RECEIVE:
			return {
				...state,
				...action.users
			};
        
        case USER_ADD_QUESTION_TO:
	      return {
		        ...state,
		        [action.author]: {
		          ...state[action.author],
		          questions: state[action.author].questions.concat(action.qid),
		        },
		      };

        case USER_ADD_ANSWER_TO:
	      return {
	        ...state,
	        [action.author]: {
	          ...state[action.author],
	          answers: {
	            ...state[action.author].answers,
	            [action.qid]: action.answer,
	          },
	        },
	      };

		default:
			return state;
	}
}