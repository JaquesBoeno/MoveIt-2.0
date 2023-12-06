import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react'

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  cycleIsActive: boolean
  progress: number
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeout: ReturnType<typeof setTimeout>

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
  const totalTime = 25 * 60
  const [cycleIsActive, setCycleActive] = useState(false)
  const [time, setTime] = useState(totalTime)
  const [hasFinished, setHasFinished] = useState(false)
  const [progress, setProgress] = useState(0)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setProgress(0)
    setTime(totalTime)
    setCycleActive(false)
  }

  const startCountdown = () => {
    setCycleActive(true)
  }

  useEffect(() => {
    if (cycleIsActive && time > 0) {
      setProgress(((totalTime - (time - 1)) / totalTime) * 100)
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (cycleIsActive || time === 0) {
      setHasFinished(true)
      setCycleActive(false)
    }
  }, [cycleIsActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        cycleIsActive,
        startCountdown,
        resetCountdown,
        progress,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
