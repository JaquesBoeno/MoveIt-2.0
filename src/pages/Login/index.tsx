import React, { useContext } from 'react'
import logo from '../../assets/back-logo.svg'
import moveit from '../../assets/moveit.svg'
import github from '../../assets/github-icon.svg'
import './styles.scss'
import { Github } from '../../assets/svgs'
import { UserAuthContext } from '../../contexts/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { singIn, isAuthenticated } = useContext(UserAuthContext)
  const navigate = useNavigate()

  if (isAuthenticated) navigate('/countdown')

  return (
    <div id="LoginPage">
      <div className="logo-image">
        <img src={logo} />
      </div>
      <div className="login">
        <img src={moveit} />
        <div className="form">
          <p>Bem-vindo</p>
          <span>
            <img src={github} />
            Faça login com seu Github para começar
          </span>
          <button onClick={singIn}>
            <span>
              <Github />
              SingIn with github
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { Login }
