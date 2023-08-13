import React from 'react'

import './styles.scss'
import { ExperienceBar } from '../../components/ExperienceBar'
import { Profile } from '../../components/Profile'

const Countdown: React.FC = () => {
  return (
    <div id="Countdown">
      <ExperienceBar />
      <section className="Countdown-Container">
        <div className="Wrapper">
          <div className="Profile">
            <Profile />
          </div>
        </div>
      </section>
    </div>
  )
}

export { Countdown }
