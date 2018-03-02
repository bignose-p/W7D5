import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


const sessionReducer = (state={currentUser: null}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    default: return state;
  }
};

// MAKE SURE THAT STATE IS SET UP RIGHT, DOES currentuser need to be neted under session


export default sessionReducer;
