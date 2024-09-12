import React from 'react'

function player(props) {
  return (

    <div className="playerDiv">
        <img  className="playerImg" src={props.pic}></img>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
    </div>
 
  )
}

export default player
