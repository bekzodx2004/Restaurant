import React from 'react'
import { ul } from '../API'
import './Header.scss'
const Header = () => {
  return (

    <div className="header">
        <ul>
    {
        ul.map(
            li=>{
                return <li key={li.id}><a href={li.url}>{li.text}</a></li>
            }
        )
    }
        </ul>
    </div>  
)
}

export default Header