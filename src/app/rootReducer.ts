import {combineReducers} from '@reduxjs/toolkit';
import issuesDisplayReducer from '../features/issuesDisplay/issuesDisplaySlice'
import repoDetailsReducer from '../features/repoSearch/repoDetailsSlice';
import issues from '../features/issuesList/issuesSlice';
import comments from '../features/issueDetails/commentsSlice';

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailsReducer,
  issues,
  comments
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;