import React from 'react'

import './styles.scss'
import { LevelUp } from '../../assets/svgs'

const ChallengeBox: React.FC = () => {
  return (
    <div id="ChallengeBox">
      <h1>
        Inicie um ciclo <br />
        para receber desafios
      </h1>
      <LevelUp />
      <p>
        Avance de level completando <br />
        os desafios.
      </p>
    </div>
  )
}

export { ChallengeBox }
