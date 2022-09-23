import { POLLS_RECEIVE, POLL_QUESTION_ADD, POLL_QUESTION_ADD_ANSWER } from '../actions/Polls';

export default function Polls(state = null, action) {
	switch (action.type) {
		case POLLS_RECEIVE:
			return {
			...state,
			...action.questions,
			};

		case POLL_QUESTION_ADD:
			return {
			...state,
			[action.question.id]: action.question,
			};
			
		case POLL_QUESTION_ADD_ANSWER:
			return {
			...state,
			[action.qid]: {
				...state[action.qid],
				[action.answer]: {
					...state[action.qid][action.answer],
					votes: state[action.qid][action.answer].votes.concat(action.author),
					},
				},
			};
		default:
			return state;
	}
}