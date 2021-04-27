import { combineReducers } from 'redux'

import recipesList  from './recipesList'

export default combineReducers({
  list: recipesList,
})
