import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from "./_DATA";
  
  export function APILoadData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
        users,
        questions,
      })
    );
  }

  export function APIPollQuestionAdd (question) {
    return _saveQuestion(question)
  }
  
  export function APIPollQuestionAddAnswer(userId, qid, answer) {
    return _saveQuestionAnswer({
      authedUser: userId,
      qid,
      answer,
    });
  }