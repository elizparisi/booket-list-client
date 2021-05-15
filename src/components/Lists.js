import React from 'react'

const Lists = (props) => {

  return (
    <div>
      {props.lists.map((list) => <li key={list.id}>{list.name}</li>)}
    </div>
  )
}

export default Lists
