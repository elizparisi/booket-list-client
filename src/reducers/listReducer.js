
export default function listReducer(state = {lists: []}, action){

  switch (action.type){
    case 'FETCH_LISTS':
      return {lists: action.payload}

    case 'ADD_LIST':
      return {...state, lists: [...state.lists, action.payload]}

    case 'ADD_BOOK':
      let lists = state.lists.map(list => {
        if (list.id === action.payload.id) {
          return action.payload
        } else {
          return list
        }
      })
      return {...state, lists: lists}

    default:
      return state
  }
}
