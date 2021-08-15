import {CHANGE_LANGUAGE, CHANGE_NAV} from './constants'

export const changeLanguage = (dispatch) => {
  dispatch({
    type: CHANGE_LANGUAGE,
  })
}

export const changeNav = (data) => (dispatch) => {
  dispatch({
    type: CHANGE_NAV,
    payload: data,
  })
}