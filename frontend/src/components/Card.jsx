import React from 'react'

function Card(props) {
  return (
    <div className='card'>
    <h4>{props.title}</h4>
    <hr />
    <p>{props.description}</p>
  </div>
  )
}

export default Card