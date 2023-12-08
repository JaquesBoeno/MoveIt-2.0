import React, { useContext } from 'react'

import './styles.scss'
import { ChallengeContext } from '../../contexts/ChallengeContext'

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)
  const CurrentExperiencePercent = (currentExperience / experienceToNextLevel) * 100

  return (
    <div id="ExperienceBar">
      <span className="current-xp">0xp</span>
      <div className="bar">
        <div className="current-xp-bar" style={{ width: `${CurrentExperiencePercent}%` }}></div>
        <span className="current-xp-text" style={{ left: `${CurrentExperiencePercent}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span className="next-xp">{experienceToNextLevel} xp</span>
    </div>
  )
}

export { ExperienceBar }
