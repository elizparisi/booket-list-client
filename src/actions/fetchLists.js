
export function fetchLists(){

// instead of connect automatically dispatching an action with thunk we can pass dispatch into our function and use it inside our action creator
  return (dispatch) => {
    fetch("http://localhost:3000/lists")
    .then(response => response.json())
    .then(lists => dispatch({
      type: "FETCH_LISTS",
      payload: lists
    }))
  }
}
