import { combineReducers } from 'redux';
import { triviaData } from './triviaDataReducer';
import { correctQuestions } from './correctQuestionsReducer';
import { incorrectQuestions } from './incorrectQuestionsReducer';
import { userName } from './userNameReducer';
import { difficulty } from './difficultyReducer';

export const rootReducer = combineReducers({
  triviaData,
  correctQuestions,
  incorrectQuestions,
  userName,
  difficulty
});
