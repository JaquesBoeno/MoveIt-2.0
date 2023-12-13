import { ReactNode, createContext, useState } from 'react'

import { getAuth, signInWithPopup } from 'firebase/auth'

import { provider } from '../services/github'
import { app } from '../services/firebase'

interface UserAuthContextData {
  user: User | undefined
  isAuthenticated: boolean
  singIn: () => void
}

interface User {
  name: string
  email: string
  photoURL: string
}

const UserAuthContext = createContext({} as UserAuthContextData)

interface UserAuthProviderProps {
  children: ReactNode
}

const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const singIn = async () => {
    const auth = getAuth(app)
    try {
      const results = await signInWithPopup(auth, provider)
      if (results.user.displayName && results.user.email && results.user.photoURL) {
        setUser({
          name: results.user.displayName,
          email: results.user.email,
          photoURL: results.user.photoURL,
        })
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserAuthContext.Provider
      value={{
        user,
        singIn,
        isAuthenticated,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  )
}

export { UserAuthContext, UserAuthProvider }
