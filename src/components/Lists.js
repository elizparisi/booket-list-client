import React from 'react'
import List from '../components/List'

const Lists = (props) => {

  return (
    <div>
      {props.lists.map(list =>
        <div key={list.id}><List list={list}/></div>)}
    </div>
  )
}

export default Lists
