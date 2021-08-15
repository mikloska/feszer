import {CHANGE_LANGUAGE, CHANGE_NAV} from './constants'

export const languageReducer = (
  state='',
  action
) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      if(state==='MAGYAR') return 'ENGLISH'
      return 'MAGYAR'
      

      // if (language === 'MAGYAR') {
      //   return {
      //     ...state,
      //     language: 'ENGLISH'
      //   }
      // } else {
      //   return {
      //     ...state,
      //     language: 'MAGYAR'
      //   }
      // }
    default:
      return state
  }
}

export const navReducer = (
  state='',
  action
) => {
  switch (action.type) {
    case CHANGE_NAV:
      return {
        // state: state,

      }

    default:
      return state
  }
}