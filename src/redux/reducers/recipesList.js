import {
  GET_LIST,
  GET_ITEM
} from '../actionTypes'

const initialState = {
  lists: [],
  loading: true,
  item: []
}

export default function (state = initialState, action) {

  switch (action.type) {

    case GET_LIST:
      return {
        ...state,
        lists: action.payload,
          loading: false

      }
      case GET_ITEM:
        return {
          ...state,
          item: action.payload,
            loading: false
        };
      default:
        return state
  }
}