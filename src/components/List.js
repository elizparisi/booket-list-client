// individual list component that will show books associated with that list (stateless component)
import React from 'react'

const List = (props) => {

  let list = props.lists[props.match.params.id - 1]

  return (
    <li>
      {list ? list.name : null}
    </li>
  )
}

export default List
