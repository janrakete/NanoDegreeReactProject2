import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion", () => {
	// Unit testing Case 1
	it("will save a question and return all expected fields", async () => {

		const author = "iamuserbaby";
		const optionOneText = "Option 1 Text";
		const optionTwoText = "Option 2 Text";
		const question = { author, optionOneText, optionTwoText };

		const expectation = {
			author: author,
				optionOne: {
					text: optionOneText,
				},
				optionTwo: {
					text: optionTwoText,
				},
		};

		await expect(_saveQuestion(question)).resolves.toMatchObject(expectation);
	});

	// Unit testing Case 2
	it("will return a error if fields are missing", async () => {
		await expect(_saveQuestion({})).rejects.toEqual(
		"Please provide optionOneText, optionTwoText, and author"
		);
	});
});

describe("_saveQuestionAnswer", () => {
	// Unit testing Case 3
	it("will save the answer and returns true", async () => {

		const authedUser = "mtsamis";
		const qid = "am8ehyc8byjqgar0jgpub9";
		const answer = "optionOne";
		const data = { authedUser, qid, answer };

		await expect(_saveQuestionAnswer(data)).resolves.toBe(true);
		});

		// Unit testing Case 4
		it("will return a error if fields are missing", async () => {
			await expect(_saveQuestionAnswer({})).rejects.toEqual(
			"Please provide authedUser, qid, and answer"
		);
	});
});