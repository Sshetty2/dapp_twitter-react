import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

// the general practice is to combine reducers into some kind of 'rootReducer' so that when you create your store, you only need to pass in one argument.
// Reducers are split into multiple modules do to the variagated nature of their functionality

// see the authentication reducer for a specific example of how an action is dipatched to reducer in order to make changes to state

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;