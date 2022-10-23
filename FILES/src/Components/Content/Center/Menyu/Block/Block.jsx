import React from 'react'
import './Block.scss'
const Block = (props) => {
  return (
    <div className="menyu__block">
        <img src={props.img} alt="" />
        <div className="menyu__block__text">
            <h2>{props.nomi}</h2>
            <p>{props.info}</p>
            <h3>{props.narx}</h3>
            <a href="https://reactjs.org/">{props.more}</a>
        </div>
    </div>
  )
}

export default Block