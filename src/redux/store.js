import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import { languageReducer } from './reducers';

const reducer =  combineReducers({
  language: languageReducer,
})

const initialState = {
  language: 'MAGYAR',
}



const store = createStore(reducer, initialState, composeWithDevTools())


export default store