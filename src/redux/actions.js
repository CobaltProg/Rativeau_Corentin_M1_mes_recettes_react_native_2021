import {
  GET_LIST,
  LIST_ERROR,
  GET_ITEM,
  ITEM_ERROR
} from './actionTypes'
import axios from 'axios'

export const getList = () => async dispatch => {

  try {
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f99f93b0541748c48c0ab226ec3c0036`)
      dispatch({
          type: GET_LIST,
          payload: res.data.results
      })
  } catch (e) {
      dispatch({
          type: LIST_ERROR,
          payload: console.log(e),
      })
  }

}
export const getItem = (id) => async dispatch => {
  try {
      const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f99f93b0541748c48c0ab226ec3c0036`);

      dispatch({
          type: GET_ITEM,
          payload: res.data,
      });

  } catch (e) {
      dispatch({
          type: ITEM_ERROR,
          payload: console.log(e),
      })
  }
};