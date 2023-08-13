import React from 'react'

import './styles.scss'
import { ExperienceBar } from '../../components/ExperienceBar'
import { Profile } from '../../components/Profile'
import { CompletedChallenges } from '../../components/CompletedChallenges'
import { Countdown } from '../../components/Countdown'
import { ChallengeBox } from '../../components/ChallengeBox'

const CountdownPage: React.FC = () => {
  return (
    <div id="CountdownPage">
      <ExperienceBar />
      <section className="Countdown-Container">
        <div className="Wrapper">
          <div className="Profile">
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div className="ChallengeBox">
            <ChallengeBox />
          </div>
        </div>
      </section>
    </div>
  )
}

export { CountdownPage }
