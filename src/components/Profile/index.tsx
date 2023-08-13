import React from 'react'

import './styles.scss'
import { Level } from '../../assets/svgs'

const Profile: React.FC = () => {
  return (
    <div id="Profile">
      <img src="https://github.com/JaquesBoeno.png" />
      <div>
        <h1>JaquesBoeno</h1>
        <Level />
        <span>Level 1</span>
      </div>
    </div>
  )
}

export { Profile }
