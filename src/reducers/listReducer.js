
export default function listReducer(state = {lists: []}, action){

  switch (action.type){
    case 'FETCH_LISTS':
      return {lists: action.payload}

    case 'ADD_LIST':
      return {...state, lists[...state.lists, action.payload]}

    default:
      return state
  }
}
