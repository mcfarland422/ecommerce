// This is the master or root reducer.
// Each reducer contains a piece of state.
// The root reducer contains all the reducers.
// I.e., the root reducer contains ALL pieces of state,
// or the entire application state.
//
// Inorder to get all the "little" reducers or pieces of state
// inot one big, "root" reducer, we need the combineReducers method from redux.
import { combineReducers } from 'redux';

// Immport each indiviual reducer to hand to combineReducers
import AuthReducer from './AuthReducer';

// combineReducers takes an object as an arg
// that arg has key:value pair = stateName: reducerFunction
// the reducerFunction will return a value
const rootReducer = combineReducers({
  auth: AuthReducer
})

export default rootReducer;
