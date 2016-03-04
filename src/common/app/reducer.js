import { combineReducers } from 'redux';
import { reduxFields } from '../lib/redux-fields';
import { routerReducer as routing } from 'react-router-redux';

import auth from '../auth/reducer';
import device from '../device/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import ui from '../ui/reducer';
import users from '../users/reducer';
import loanCalc from '../loan-calc/reducer';

const appReducer = combineReducers({
  auth,
  device,
  intl,
  reduxFields,
  routing,
  todos,
  ui,
  users,
  loanCalc
});

export default appReducer;
