import React from "react"
import "./CardList.css"

function Cardlist(props){
  return(
      <div className="container">
        <figure>
        <img alt="monster" src={`https://robohash.org/${props.monster.id*10}?set=set2&size=180x180`}></img>
          <figcaption>{props.monster.name}</figcaption>
          <p>{props.monster.email}</p>
        </figure>
      </div>
  )
}
export default Cardlist