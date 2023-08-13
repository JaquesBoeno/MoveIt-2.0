import React from 'react'

import './styles.scss'

const ExperienceBar: React.FC = () => {
  const CurrentLevel = 0
  const CurrentExperience = 0
  const ExperienceToNextLevel = Math.pow((CurrentLevel + 1) * 4, 2)
  const CurrentExperiencePercent =
    (CurrentExperience / ExperienceToNextLevel) * 100
  return (
    <div id="ExperienceBar">
      <span className="current-xp">0xp</span>
      <div className="bar">
        <div
          className="current-xp-bar"
          style={{ width: `${CurrentExperiencePercent}%` }}
        ></div>
        <span
          className="current-xp-text"
          style={{ left: `${CurrentExperiencePercent}%` }}
        >
          {CurrentExperience} xp
        </span>
      </div>
      <span className="next-xp">{ExperienceToNextLevel} xp</span>
    </div>
  )
}

export { ExperienceBar }
