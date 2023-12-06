import React from 'react'

import './styles.scss'
import { Level } from '../../assets/svgs'

interface CardRanking {
  name: string
  level: number
  completedChallenges: number
  experience: number
}

const CardRanking: React.FC<CardRanking> = ({
  completedChallenges,
  experience,
  level,
  name,
}: CardRanking) => {
  return (
    <div className="CardRanking">
      <p>1</p>
      <div className="User">
        <img src="https://github.com/JaquesBoeno.png" />
        <div>
          <p>{name}</p>
          <span>
            <Level /> Level {level}
          </span>
        </div>
      </div>
      <p>
        <span>{completedChallenges}</span> completados
      </p>
      <p>
        <span>{experience}</span> xp
      </p>
    </div>
  )
}

export { CardRanking }
