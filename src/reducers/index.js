import {combineReducers} from 'redux'

import home from './home'
import auth from './auth'
import message from './message'

export default combineReducers({
  home,
  auth,
  message,
});