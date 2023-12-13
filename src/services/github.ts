import { GithubAuthProvider } from 'firebase/auth'

const provider = new GithubAuthProvider()

provider.addScope('read:user')

provider.setCustomParameters({
  allow_signup: 'true',
})

export { provider }
