import { ReactNode, createContext, useEffect, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: string
  description: string
  amount: number
}

interface ChallengeContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge | null
  levelUp: () => void
  startNewChallenge: () => void
  resetActiveChallenge: () => void
  completedChallenge: () => void
  closeLevelUpModal: () => void
}

const ChallengeContext = createContext({} as ChallengeContextData)

interface ChallengeProviderProps {
  children: ReactNode
}

const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [experienceToNextLevel, setExperienceToNextLevel] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    setExperienceToNextLevel(Math.pow(level, 2) + 100)
  }, [level])

  function levelUp() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio', {
        body: `Valendo ${challenge.amount} xp`,
      })
    }
  }

  const resetActiveChallenge = () => {
    setActiveChallenge(null)
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }
  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        activeChallenge,
        startNewChallenge,
        resetActiveChallenge,
        experienceToNextLevel,
        completedChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <></>}
    </ChallengeContext.Provider>
  )
}

export { ChallengeContext, ChallengeProvider }
