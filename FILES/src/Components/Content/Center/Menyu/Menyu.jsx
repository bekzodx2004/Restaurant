import React from 'react'
import { menyu } from '../../../API'
import Block from './Block/Block'
import './Menyu.scss'
const Menyu = () => {
  return (
    <div className="menyu" id='menyu'>
        <h2>Меню</h2>

{
    menyu.map(
        block=>{
            return <Block 
            key={block.id} 
            img={block.img} 
            nomi={block.nomi}
            info={block.info}
            narx={block.narxi}
            more={block.more}
            />
        }
    )
}

    </div>
  )
}

export default Menyu