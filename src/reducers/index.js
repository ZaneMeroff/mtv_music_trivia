import { combineReducers } from 'redux';
import { triviaData } from './triviaDataReducer';
import { correctQuestions } from './correctQuestionsReducer';
import { incorrectQuestions } from './incorrectQuestionsReducer';

export const rootReducer = combineReducers({
  triviaData,
  correctQuestions,
  incorrectQuestions
});
