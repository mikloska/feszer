import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { languageReducer, navReducer } from './src/redux/reducers';

const reducer =  combineReducers({
  language: languageReducer,
  nav: navReducer
})

const initialState = {
  language: 'MAGYAR',
  nav:'Home'
}



const store = createStore(reducer, initialState, composeWithDevTools())


export default store