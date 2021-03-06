// individual list component that will show books associated with that list (stateless component)
import React from 'react'
import {Redirect} from 'react-router-dom'
import BooksContainer from '../containers/BooksContainer'

const List = (props) => {

  let list = props.lists[props.match.params.id - 1]

  return (
    <div>
      <h2>
        {list ? list.name : null}
      </h2>
      <BooksContainer list={list}/>
    </div>
  )
}

export default List
