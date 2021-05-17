// individual list component that will show books associated with that list (stateless component)
import React from 'react'

const List = (props) => {

  return (
    <li>
      {props.list.name}
    </li>
  )
}

export default List
