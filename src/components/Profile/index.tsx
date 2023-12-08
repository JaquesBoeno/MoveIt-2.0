import React, { useContext } from 'react'

import './styles.scss'
import { Level } from '../../assets/svgs'
import { ChallengeContext } from '../../contexts/ChallengeContext'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengeContext)
  return (
    <div id="Profile">
      <img src="https://github.com/JaquesBoeno.png" />
      <div>
        <h1>JaquesBoeno</h1>
        <Level />
        <span>Level {level}</span>
      </div>
    </div>
  )
}

export { Profile }
