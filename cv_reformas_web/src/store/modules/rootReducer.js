import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import meetup from './meetup/reducer';
import page from './page/reducer';

export default combineReducers({
  auth,
  user,
  meetup,
  page,
});
