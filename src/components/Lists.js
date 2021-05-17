import React from 'react'
import List from '../components/List'

const Lists = (props) => {

  return (
    <div>
      {props.lists.map((list) => <div list={list}>List/</div>)}
    </div>
  )
}

export default Lists
