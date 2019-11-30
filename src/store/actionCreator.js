import {CHANGE_INPUT,ADD_LIST, DELETE_ITEM,RESET_INPUT} from './actionTypes'
export const changeInputAction = (value) => {
  return {
    type: CHANGE_INPUT,
    value
  }
}
export const addListAction = () =>
  {
    debugger
    return (dispatch,getState) => {
      const {inputValue} = getState();
      dispatch({
        type: ADD_LIST,
        value: inputValue
      })
      dispatch({
        type:RESET_INPUT
      })
    }
  }

export const deleteItemAction = (index) => (
  {
    type:DELETE_ITEM,
    index
  }
)