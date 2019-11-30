import {CHANGE_INPUT,ADD_LIST, DELETE_ITEM,RESET_INPUT} from './actionTypes'

// export default (state = defaultState, action)=> {
//   debugger
//   if (action.type === CHANGE_INPUT) {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.inputValue = action.value
//     return newState
//   }
//   if (action.type === ADD_LIST) {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.list.push(newState.inputValue)
//     newState.inputValue = ''
//     return newState
//   } 
//   if (action.type === DELETE_ITEM) {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.list.splice(action.index, 1)
//     return newState
//   }
//   return state;
// }
export default {
  inputValue(state = "", action) {
    if (action.type === CHANGE_INPUT) {
      return action.value
    }
    if (action.type === RESET_INPUT) {
      return ''
    }
    return state;
  },
  list(state=[],action) {
    if (action.type === ADD_LIST) {
      const newState = JSON.parse(JSON.stringify(state))
      newState.push(action.value)
      return newState
    }
    if (action.type === DELETE_ITEM) {
      const newState = JSON.parse(JSON.stringify(state))
      newState.splice(action.index, 1)
      return newState
    }
    return state;
  }
}
