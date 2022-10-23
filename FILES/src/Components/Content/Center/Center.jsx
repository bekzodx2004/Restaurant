import React from 'react'
import './Center.scss'

import Restaurant from './Restaurant/Restaurant'
import Oshpaz from './Oshpaz/Oshpaz'
import Menyu from './Menyu/Menyu'
import Clients from './Clients/Clients'
import Gallery from './Gallery/Gallery'
import Contacts from './Contacts/Contacts'

const Center = () => {
  return (
     <div className="center">
        <Restaurant/>
        <Oshpaz/>
        <Menyu/>
        <Clients/>
        <Gallery/>
        <Contacts/>
     </div>
  )
}

export default Center