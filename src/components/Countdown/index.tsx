import React, { useContext } from 'react'

import './styles.scss'
import { Check, PlayArrow, XIcon } from '../../assets/svgs'
import { CountdownContext } from '../../contexts/CountdownContext'

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    cycleIsActive,
    progress,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div id="CountdownComponent">
      <div className="CountdownTimer">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {cycleIsActive ? (
        <button className="cycleActive" onClick={() => resetCountdown()}>
          Abandonar o ciclo <XIcon />
          <div className="bar">
            <div
              className="progress"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </button>
      ) : hasFinished ? (
        <button className="cycleFinished">
          Ciclo encerrado <Check />
          <div className="bar">
            <div className="progress" />
          </div>
        </button>
      ) : (
        <button className="cycleNotActive" onClick={() => startCountdown()}>
          Iniciar um ciclo <PlayArrow />
        </button>
      )}
    </div>
  )
}

export { Countdown }
