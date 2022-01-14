import {CHANGE_LANGUAGE} from './constants'

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
