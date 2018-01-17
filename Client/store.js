import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//I did not: import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = { posts };
  //comments, removed comments just because.

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
