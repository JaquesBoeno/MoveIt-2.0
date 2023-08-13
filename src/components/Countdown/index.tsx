import React from 'react'

import './styles.scss'
import { PlayArrow } from '../../assets/svgs'

const Countdown: React.FC = () => {
  return (
    <div id="CountdownComponent">
      <div className="CountdownTimer">
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <button>
        Iniciar um ciclo <PlayArrow />
      </button>
    </div>
  )
}

export { Countdown }
