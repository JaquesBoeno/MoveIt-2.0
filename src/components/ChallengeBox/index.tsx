import React, { useContext } from 'react'

import './styles.scss'
import { Eye, Halter, LevelUp } from '../../assets/svgs'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import { CountdownContext } from '../../contexts/CountdownContext'

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetActiveChallenge, completedChallenge } = useContext(ChallengeContext)
  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengeSuccess = () => {
    completedChallenge()
    resetCountdown()
  }
  const handleChallengeFailed = () => {
    resetActiveChallenge()
    resetCountdown()
  }

  return (
    <div id="ChallengeBox">
      {activeChallenge ? (
        <>
          <div className="challenge">
            <span>Ganhe {activeChallenge.amount}xp</span>
            {activeChallenge.type == 'body' ? <Halter /> : <Eye />}
            <h1> {activeChallenge.type == 'body' ? 'Exercite-se' : 'Mova os olhos'}</h1>
            <p>{activeChallenge.description}</p>
          </div>
          <div className="buttons">
            <button onClick={handleChallengeFailed}>Falhei</button>
            <button onClick={handleChallengeSuccess}>Completei</button>
          </div>
        </>
      ) : (
        <>
          <h1>
            Inicie um ciclo <br />
            para receber desafios
          </h1>
          <LevelUp />
          <p>
            Avance de level completando <br />
            os desafios.
          </p>
        </>
      )}
    </div>
  )
}

export { ChallengeBox }
