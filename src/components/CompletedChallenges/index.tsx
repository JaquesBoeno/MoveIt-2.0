import React, { useContext } from 'react'

import './styles.scss'
import { ChallengeContext } from '../../contexts/ChallengeContext'

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <div id="CompletedChallenges">
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}

export { CompletedChallenges }
